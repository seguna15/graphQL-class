let books = [
  {
    id: "1",
    title: "Americanah",
    genre: ["Fiction", "African Stories"],
    author_id: "2",
  },
  {
    id: "2",
    title: "Things Fall Apart",
    genre: ["Fiction", "African Stories"],
    author_id: "1",
  },
  {
    id: "3",
    title: "Moby Dick",
    genre: ["Adventure", "Fiction"],
    author_id: "3",
  },
  {
    id: "4",
    title: "Purple Hibiscus",
    genre: ["Fiction", "African Stories"],
    author_id: "2",
  },
  {
    id: "5",
    title: "Everyday Nigerian",
    genre: ["Fiction", "Crime"],
    author_id: "4",
  },
];

let authors = [
  { id: "1", name: "Chinua Achebe", verified: true },
  { id: "2", name: "Chimamanda Adichie", verified: true },
  { id: "3", name: "Herman Melville", verified: true },
  { id: "4", name: "Writing Enthusiast", verified: false },
];

let users = [
  { id: "1", username: "User User1", email: "user1@example.com", verified: true },
  { id: "2", username: "User User2", email: "user2@example.com", verified: true },
  { id: "3", username: "User User3", email: "user3@example.com", verified: true },
  { id: "4", username: "User User4", email: "user4@example.com", verified: false },
];

let reviews = [
  { id: "1", rating: 9, comment: "lorem ipsum", user_id: "1", book_id: "2" },
  { id: "2", rating: 10, comment: "lorem ipsum", user_id: "2", book_id: "1" },
  { id: "3", rating: 7, comment: "lorem ipsum", user_id: "3", book_id: "3" },
  { id: "4", rating: 5, comment: "lorem ipsum", user_id: "2", book_id: "4" },
  { id: "5", rating: 8, comment: "lorem ipsum", user_id: "2", book_id: "5" },
  { id: "6", rating: 7, comment: "lorem ipsum", user_id: "1", book_id: "2" },
  { id: "7", rating: 10, comment: "lorem ipsum", user_id: "3", book_id: "1" },
];

export default { books, authors, users, reviews };
