function BookCard({book}) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>


          <p className="card-text">
            <strong>Title:</strong> {book.title}<br />
            <strong>Book Subtitle:</strong> {book.subtitle} 
          </p>


          <button
            className="btn btn-primary mt-auto"
          >
            ⭐ Favorite
          </button>
        </div>
      </div>
    </div>
  );
}


export default BookCard;