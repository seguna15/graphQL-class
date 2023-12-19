//importing DB
import db from "./db.js";

export const resolvers = {
  Query: {
    books() {
      return db.books;
    },
    reviews() {
      return db.reviews;
    },
    authors() {
      return db.authors;
    },
    users() {
      return db.users;
    },
    review(_, args) {
      return db.reviews.find((review) => review.id === args.id);
    },
    book(_, args) {
      return db.books.find((review) => review.id === args.id);
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    user(_, args) {
      return db.users.find((user) => user.id === args.id);
    },
  },

  Book: {
    reviews(parent) {
      return db.reviews.filter((r) => r.book_id === parent.id);
    },
  },

  Author: {
    books(parent) {
      return db.books.filter((b) => b.author_id === parent.id);
    },
  },

  User: {
    reviews(parent) {
      return db.reviews.filter((r) => r.user_id === parent.id);
    },
  },

  Review: {
    user(parent) {
      return db.users.find((a) => a.id === parent.user_id);
    },
    book(parent) {
      return db.books.find((b) => b.id === parent.book_id);
    },
  },

  Mutation: {
    addBook(_,args){
        let book = {
            ...args.book,
            id: Math.floor(Math.random() * 10000)
        };
        db.books.push(book);
        return book;
    },
    deleteBook(_, args) {
        const books = db.books.filter((book) => book.id !== args.id);
        return books
    },
    updateBook(_, args) {
        db.books = db.books.map((book) => {
            if(book.id === args.id){
                return {...book, ...args.edits}
            }
            return book
        })

        return db.books.find((book) => book.id === args.id);
    }
  },
};