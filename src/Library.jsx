import React from "react";
import { useParams } from "react-router-dom";
import { userData } from "./constants";

const Library = () => {
  const { libraryId } = useParams();

  const data = userData;

  const library = data.find((lib) => lib.library.id === libraryId);

  if (!library) {
    return <div>Library not found</div>;
  }

  const readers = data.filter((user) => user.library.id === libraryId);

  return (
    <div>
      <h1>{library.library.name}</h1>
      <h2>Subscribed Readers:</h2>
      <ul>
        {readers.map((reader) => (
          <li key={reader.id}>{reader.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default Library;
