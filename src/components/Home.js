import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

const Home = ({ searchKeyword }) => {
  let navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    getData(1);
  }, [searchKeyword]);

  const getData = async (pageNo) => {
    if (searchKeyword && searchKeyword.length) {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchKeyword}&page=${pageNo}`
      );
      const json = await res.json();
      console.log("json", json);
      setData(json);
    } else {
      const res = await fetch(`https://api.jikan.moe/v4/anime?page=${pageNo}`);
      const json = await res.json();
      console.log("json", json);
      setData(json);
    }
  };
  console.log("searchKeyword: ", searchKeyword);
  return (
    <>
      {data && (
        <div className="page">
          <div className="row">
            {data?.data?.map((anime, index) => {
              return (
                <div
                  className="column"
                  key={index}
                  onClick={() => {
                    navigate(`/anime/${anime.mal_id}`);
                  }}
                >
                  <Card
                    image={anime.images.jpg.image_url}
                    title={anime.title}
                    type={anime.type}
                    status={anime.status}
                    episodes={anime.episodes}
                    studios={anime.studios}
                  />
                </div>
              );
            })}
          </div>
          {/* {data} */}
        </div>
      )}
    </>
  );
};

export default Home;
