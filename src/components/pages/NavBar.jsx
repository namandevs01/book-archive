import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Book Archive
        </Link>

        <div className="navbar-nav">
          <Link className="nav-link" to="/">
            All Books
          </Link>

          <Link className="nav-link" to="/favorites">
            Favorite Books
          </Link>
         
          <Link className="nav-link" to="/about">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;