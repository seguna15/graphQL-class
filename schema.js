// define schema for graphql
// data types Int, Float, String, Boolean, ID 
export const typeDefs = `#graphql
    type Book {
        id: ID!
        title: String!
        genre: [String!]!
        author: Author!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        comment: String! 
        book: Book!
        user: User!
    }
    type Author {
        id: ID!,
        name: String!
        verified: Boolean!
        books: [Book!]
    }
    type User{
        id: ID!,
        username: String!,
        email: String!,
        verified: Boolean!
        reviews: [Review!]
    }
    type Query{
        reviews: [Review]
        review(id: ID!): Review
        books: [Book]
        book(id: ID!): Book
        authors: [Author]
        author(id: ID!): Author 
        users: [User]
        user(id: ID!): User 
    }

    type Mutation {
        addBook(book: AddBookInput!): Book
        deleteBook(id: ID!): [Book]
        updateBook(id: ID!, edits: EditBookInput! ): Book
    }
    
    input AddBookInput {
        title: String!
        genre: [String!]!
    }

    input EditBookInput {
        title: String
        genre: [String!]
    }
`