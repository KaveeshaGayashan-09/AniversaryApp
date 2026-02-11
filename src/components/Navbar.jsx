import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="nav-title">Our Love Journey 💕</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/summary">Summary</Link></li>
          <li><Link to="/memories">Memories</Link></li>
          <li><Link to="/future">Future</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
