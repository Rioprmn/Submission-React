import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Personal Notes</h2>
      <div className="nav-menu">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/archives">Archive</NavLink>
        <NavLink to="/notes/new">Add</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;