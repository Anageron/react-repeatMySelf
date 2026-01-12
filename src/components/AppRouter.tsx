import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/about";
import Posts from "../pages/post";
import Error from "../pages/error";
import PostIdPage from "../pages/postIdPage";
import { privateRoutes, publicRoutes } from "../routes/routes";
import { useContext } from "react";
import { AuthContext } from "../context";
import MyLoader from "./UI/loader/MyLoader";

const AppRouter = function () {
  const {isAuth, isLoading} = useContext(AuthContext)

  if(isLoading) {
    return <MyLoader />
  }

  return isAuth ? (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/login" element={<Navigate to="/posts" replace />} />
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Navigate to="/error" replace />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AppRouter;
