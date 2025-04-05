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
          <Link href="/impact" className='nav-link'>Impact</Link>
        </li>
        <li>
          <Link href="/about" className="nav-link">About</Link>
        </li>
        <li>
          <Link href="/contact" className="nav-link">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
