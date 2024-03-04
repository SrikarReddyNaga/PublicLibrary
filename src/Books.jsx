import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "./constants";

const Books = () => {
  const { bookId } = useParams();
  const data = userData;

  // Filter to find all readers who have taken this book
  const readersWithBook = data.reduce((acc, user) => {
    const hasBook = user.books.some((book) => book.id.toString() === bookId);
    if (hasBook) acc.push(user.fullName);
    return acc;
  }, []);

  return (
    <div>
      <h1>Readers Who Have Taken This Book:</h1>
      <ul>
        {readersWithBook.length > 0 ? (
          readersWithBook.map((reader, index) => <li key={index}>{reader}</li>)
        ) : (
          <p>No readers have taken this book.</p>
        )}
      </ul>
    </div>
  );
};

export default Books;
