import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Horror stories </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New story</Link>
      </div>
    </nav>
  )
}

export default Navbar
