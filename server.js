import { ApolloServer, gql } from 'apollo-server';

/** DB와 같은 역할 */
const tweets = [{
  id : '1', 
  text : 'first one', 
  userId : '2'
}, 
{
  id : '1', 
  text : 'first one', 
  userId : '1'
}]
/** ------------ */

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

const resolvers = {
  Query {
    allTweet() {
      return tweets;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
