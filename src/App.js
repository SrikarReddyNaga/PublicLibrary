import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Books from "./Books";
import Library from "./Library";
import BookDetails from "./BookDetails";
import Navbar from "./Navbar";
import { DataProvider } from "./DataContext";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/library/:libraryId" element={<Library />}></Route>
          {/* <Route path="/book/:bookId" element={<Books />} /> */}
          <Route
            path="/library/:libraryId/book/:bookId"
            element={<BookDetails />}
          />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
