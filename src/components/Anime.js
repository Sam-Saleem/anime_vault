import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import NotFound from "./NotFound";

const Anime = () => {
  const { animeId } = useParams();
  const [data, setData] = useState("");
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
      const json = await res.json();
      if (json.status && json.status === 404) {
        setNotFound(true);
      } else {
        setData(json.data);
      }
    };
    getData();
  }, [animeId]);

  return (
    <>
      {notFound ? (
        <NotFound />
      ) : data ? (
        <div className="anime">
          <div class="animeImg">
            <img src={data?.images.webp.large_image_url} alt="Anime" />
          </div>
          <div class="animeDetails">
            <h1>{data?.title}</h1>
            <p>
              <b>Synopsis: </b>
              {data?.synopsis}
            </p>
            <p>
              <b>Also known as: </b>
              {data?.title_synonyms
                .map((title_synonym) => title_synonym)
                .join(", ")}
            </p>
            <p>
              <b>Type: </b>
              {data?.type}
            </p>
            <p>
              <b>Episodes: </b>
              {data?.episodes}
            </p>
            <p>
              <b>Status: </b>
              {data?.status}
            </p>
            <p>
              <b>Rating: </b>
              {data?.score}
            </p>
            <p>
              <b>Genres: </b>
              {data?.genres.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <b>Themes: </b>
              {data?.themes.map((theme) => theme.name).join(", ")}
            </p>
            <p>
              <b>Producers: </b>
              {data?.producers.map((producer) => producer.name).join(", ")}
            </p>
            <p>
              <b>Studios: </b>
              {data?.studios.map((studio) => studio.name).join(", ")}
            </p>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Anime;
