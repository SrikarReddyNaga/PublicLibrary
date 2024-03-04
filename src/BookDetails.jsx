import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "./constants";

const BookDetails = () => {
  const { bookId, libraryId } = useParams();

  const data = userData;

  // Filter to find all readers from the specified library who have taken this book
  const readersWithBook = data
    .filter((user) => user.library.id === libraryId)
    .reduce((acc, user) => {
      const hasBook = user.books.some((book) => book.id.toString() === bookId);
      if (hasBook) acc.push(user.fullName);
      return acc;
    }, []);

  return (
    <div>
      <h1>Readers Who Have Taken This Book from the Library:</h1>
      <ul>
        {readersWithBook.length > 0 ? (
          readersWithBook.map((reader, index) => <li key={index}>{reader}</li>)
        ) : (
          <p>No readers from this library have taken this book.</p>
        )}
      </ul>
    </div>
  );
};

export default BookDetails;
