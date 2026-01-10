import React, { useMemo, useRef } from "react";
import PostItem from "./PostItem";
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

const PostList = function ({ posts, title, remove }) {

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: 'center', fontSize: '36px' }}>Посты не найдены</h1>
    );
  }
  const nodeRefs = useMemo(() => {
    const refs = {};
    posts.forEach(post => {
      refs[post.id] = React.createRef();
    });
    return refs;
  }, [posts.map(p => p.id).join(',')]);

  

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition
            key={post.id}
            nodeRef={nodeRefs[post.id]}
            timeout={500}
            classNames="post"
          >
            <div ref={nodeRefs[post.id]}>
              <PostItem remove={remove} number={index + 1} post={post} />
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;