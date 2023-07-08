const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    bankroll: [Bankroll]
  }

  type BankRoll {
    start: Int
    current: Int
  }

  type Session {
    _id: ID
    casino: String
    location: String
    game: String
    stakes: String
    buyIn: Int
    cashOut: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    # session
    # bankroll
  }

  type Mutation {
    # add user
    # login
    # add bankroll
    # stat session

  }
`;

module.exports = typeDefs;
