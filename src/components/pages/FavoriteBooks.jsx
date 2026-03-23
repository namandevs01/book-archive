import axios from "axios";
import { useEffect, useState } from "react";
import JobCard from "../BookCard";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [loading, setloading] = useState(true); 
  useEffect(() => {
    const fetchFavorites = async () => {
      const snapshot = await getDocs(collection(db, "favorites"));

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setJobs(data);
      setloading(false);
    };

    fetchFavorites();
  }, []); 

  const removeJob = async (job) => {
     await deleteDoc(doc(db, "favorites", job.id));

    alert("Book removed from favorites ❌");

    setJobs(books.filter((j) => j.id !== job.id));
  };
 

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center mb-4">Favorite Books</h2>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border text-primary"></div>
          <p>Loading Books...</p>
        </div>
      ) : (
        <div className="row">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              buttonText={
                "Remove Books"
              }
              onAction={removeBook}
            />
          ))}
        </div>
      )}
    </div>
  );
}
