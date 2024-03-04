import React from "react";
import { Link } from "react-router-dom";
import { userData } from "./constants";

const Home = () => {
  const data = userData;
  return (
    <div>
      <h1>Readers and Their Books</h1>
      {data.map((user) => (
        <div key={user.id}>
          <h2>{user.fullName}</h2>
          <p>
            Library:{" "}
            <Link to={`/library/${user.library.id}`}>{user.library.name}</Link>
          </p>
          <ul>
            {user.books.map((book) => (
              //if we need all the readers who have taken the particular book
              // <li key={book.id}>
              //   <Link to={`/book/${book.id}`}>{book.title}</Link> by{" "}
              //   {book.author}
              // </li>
              //if we need all the readers who have taken that particular book from that library
              <li key={book.id}>
                <Link to={`/library/${user.library.id}/book/${book.id}`}> 
                  {book.title}
                </Link>{" "} by {book.author}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Home;
