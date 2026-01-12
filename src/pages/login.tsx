import { useContext } from "react";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

const Login = function () {

const {isAuth, setIsAuth} = useContext(AuthContext)

function login(e) {
  e.preventDefault()
  localStorage.setItem('auth', 'true')
  setIsAuth(true)
}
  return (
    <div>
      <h1>Вход:</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
