import {gql} from 'apollo-boost';
import {DocumentNode} from "graphql";

export const ALL_FILMS: DocumentNode = gql`
    {
        films: allFilms(
            orderBy: episodeId_ASC
        ) {
            id
            title
            openingCrawl
        }
    }
`;
