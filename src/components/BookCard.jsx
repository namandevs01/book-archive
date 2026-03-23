function BookCard({ book, buttonText, onAction, disabled }) {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{book.title}</h5>

          <p className="card-text">
            <strong>Book Subtitle:</strong> {book.subtitle} <br />
            <strong>Author Name:</strong> {book.author_name?.[0] || "Unknown"}
          </p>

          <button
            className="btn btn-primary mt-auto"
            disabled={disabled}
            onClick={() => onAction(book)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;