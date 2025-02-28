import './Navbar.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link href="/" className="nav-link">Home</Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">About</Link>
        </li>
        <li>
          <a href="/contact" className="nav-link">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
