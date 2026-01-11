import { Link } from "react-router-dom";

const Navigation = function () {
    return ( 
        <nav className="navbar">
        <div className="navbar__links">
          <Link to="/about">О нас</Link>
          <Link to="/posts">Посты</Link>
        </div>
      </nav>
     );
}

export default Navigation;
