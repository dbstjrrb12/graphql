import { ApolloServer, gql } from 'apollo-server';

/** DB와 같은 역할 */
const tweets = [
  {
    id: '1',
    text: 'first one',
    userId: '2',
  },
  {
    id: '1',
    text: 'first one',
    userId: '1',
  },
];
/** ------------ */

const typeDefs = gql`
  type User {
    id: ID
    firstname: String
    lastname: String
    fullname: String
  }
  type Tweet {
    id: ID
    text: String
    author: User
  }
  type Query {
    allTweet: [Tweet]
  }
  type Mutation {
    postTweet(userId: ID, text: String): Tweet
  }
`;

const resolvers = {
  User: {
    fullname(root) {
      const { firstname, lastname } = root;
      return `${firstname} ${lastname}`;
    },
  },
  Query: {
    allTweets() {
      return tweets;
    },
  },
  Mutation: {
    postTweet(root, { userId, text }) {
      const newTweet = {
        userId,
        text,
        id: tweets.length + 1,
      };

      tweets.push(newTweet);
      return newTweet;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Running on ${url}`);
});
