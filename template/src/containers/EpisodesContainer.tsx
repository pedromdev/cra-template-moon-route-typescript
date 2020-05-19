import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {ALL_FILMS} from "../graphql/queries/films";
import Episodes from "../components/Episodes/Episodes";
import Episode from "../components/Episode/Episode";

type Film = {
  id: number;
  title: string;
  openingCrawl: string;
}

const EpisodesContainer = (): JSX.Element => {
  const {data, loading} = useQuery<{ films: Film[] }>(ALL_FILMS);

  return (
    <Episodes>
      {!loading && data && data.films.map(film => (
        <Episode
          key={film.id}
          title={film.title}
          openingCrawl={film.openingCrawl}
        />
      ))}
    </Episodes>
  );
};

export default EpisodesContainer;
