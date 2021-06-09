import {Link} from "react-router-dom"
export function Header() {
  return (
    <header className="Header">
      gallery practice app
      &emsp;
      <Link to={`/`}> (gallery)</Link>
      &emsp;
      <Link to={`/about`}> (About) </Link>
    </header>
  );
}

export default Header;
