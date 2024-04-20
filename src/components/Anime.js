import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Anime = () => {
  const { animeId } = useParams();
  console.log("animeId: ", animeId);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(`https://api.jikan.moe/v4/anime/${animeId}`);
      const json = await res.json();
      console.log(json.data);
      setData(json.data);
    };
    getData();
  }, []);
  return (
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
          {data?.title_synonyms.map((title_synonym) => (
            <> {title_synonym} </>
          ))}
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
          {data?.genres.map((genre) => (
            <> {genre.name} </>
          ))}
        </p>
        <p>
          <b>Themes: </b>
          {data?.themes.map((theme) => (
            <> {theme.name} </>
          ))}
        </p>
        <p>
          <b>Producers: </b>
          {data?.producers.map((producer) => (
            <> {producer.name} </>
          ))}
        </p>
        <p>
          <b>Studios: </b>
          {data?.studios.map((studio) => (
            <> {studio.name} </>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Anime;
