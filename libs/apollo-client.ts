import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_GRAPHQL_CDN_API_URL
      : process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default client;
