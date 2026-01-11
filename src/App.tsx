import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about";
import Posts from "./pages/post";
import Navigation from "./components/UI/myNav/Navigation";

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
      }}
    >
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<Navigate to="/posts" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
