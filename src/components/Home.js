import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = ({ searchKeyword, setSearch }) => {
  let navigate = useNavigate();

  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [hasSearchData, setHasSearchData] = useState(true);

  useEffect(() => {
    const getData = async () => {
      let json;
      if (searchKeyword && searchKeyword.length) {
        const res = await fetch(
          `https://api.jikan.moe/v4/anime?q=${searchKeyword}&page=${1}`
        );
        json = await res.json();
        if (json.pagination.items.total <= 0) {
          setHasSearchData(false);
        } else {
          setHasSearchData(true);
        }
      } else {
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${1}`);
        json = await res.json();
      }
      setPageNo(1);
      setHasMore(json.pagination.has_next_page);
      setData(json.data);
    };

    getData();
  }, [searchKeyword]);

  const getMoreData = async () => {
    let json;
    if (searchKeyword && searchKeyword.length) {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchKeyword}&page=${pageNo + 1}`
      );
      json = await res.json();
    } else {
      const res = await fetch(
        `https://api.jikan.moe/v4/anime?page=${pageNo + 1}`
      );
      json = await res.json();
    }
    setPageNo(pageNo + 1);
    setHasMore(json.pagination.has_next_page);
    setData(data.concat(json.data));
  };

  return (
    <>
      {data.length ? (
        <InfiniteScroll
          dataLength={data.length} //This is important field to render the next data
          next={getMoreData}
          hasMore={hasMore}
          loader={<img src="/loading.gif" alt="loading....." width={"100px"} />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="page">
            <div className="row">
              {data?.map((anime, index) => {
                return (
                  <div
                    className="column"
                    key={index}
                    onClick={() => {
                      setSearch("");
                      navigate(`/anime/${anime.mal_id}`);
                    }}
                  >
                    <Card
                      image={anime.images.webp.large_image_url}
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
          </div>
        </InfiniteScroll>
      ) : searchKeyword && !hasSearchData ? (
        <div className="notFound">
          <h3>
            There isn't any anime related to search keyword: '
            <b>{searchKeyword}</b>' available.
          </h3>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Home;
