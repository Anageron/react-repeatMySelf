import { useMemo, useRef, useState } from "react";
import "./App.css";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/myModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - Язык програмирования" },
    { id: 2, title: "Axios 2", body: "Ggggg - Язык програмирования" },
    { id: 3, title: "Python 3", body: "AAAA - Язык програмирования" },
  ]);

  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAmdSearchePosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false)
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
          remove={removePost}
          posts={sortedAmdSearchePosts}
          title={"Список постов"}
        />
    </div>
  );
}

export default App;
