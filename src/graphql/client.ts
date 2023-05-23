import { ApolloClient, InMemoryCache } from "@apollo/client";
import { url } from "../utills";

export const client = new ApolloClient({
  uri: url,
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});
