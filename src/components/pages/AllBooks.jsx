import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../BookCard";

import { setDoc, collection, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(true);
  const [savedBooks, setSavedBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://openlibrary.org/search.json?q=javascript")
      .then((res) => {
        setBooks(res.data || []);
        setloading(false);
      })
      .catch((error) => console.error(error));
  }, []);
  console.log(books);

  const saveBook = async (book) => {
    await setDoc(doc(db, "favorites", book.key), book);

    alert("Book added to favorites ⭐");
    // track saved books
    setSavedBooks([...savedBooks, book.key]);
  };
 

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">All Books</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p>Loading Books...</p>
        </div>
      ) : (
        <div className="row">
          {books.docs.map((book) => (
            <BookCard
              key={book.key}
              book={book}
              buttonText="⭐ Favorite"
              onAction={() => {}}
              disabled={false}
            />
          ))}
        </div>
      )}
    </div>
  );
}
