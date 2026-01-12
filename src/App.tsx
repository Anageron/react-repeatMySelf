import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./components/UI/myNav/Navigation";
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() =>{
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    } 
    setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
          <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Navigation />
      <AppRouter />
    </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
