import ApolloClient from "apollo-boost";

export const client: ApolloClient<any> = new ApolloClient<any>({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT
});
