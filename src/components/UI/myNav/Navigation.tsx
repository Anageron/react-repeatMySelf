import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import { AuthContext } from "../../../context";
import { useContext } from "react";

const Navigation = function () {

  const {isAuth, setIsAuth} = useContext(AuthContext)
  function logout() {
    localStorage.removeItem('auth')
    setIsAuth(false)
  }
    return ( 
      <nav className="navbar" style={{width:'100%'}}>
           
        <div className="navbar__links">
          <Link to="/about">О нас</Link>
          <Link to="/posts">Посты</Link>
        </div>
        <MyButton onClick={logout}>
          Выйти  
        </MyButton> 
      </nav>
     );
}

export default Navigation;
