import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
  type User {
    id: ID
    firstname: String
    lastname: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweet: [Tweet]
  }
`;

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
