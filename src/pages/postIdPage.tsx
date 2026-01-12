import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../api/PostService";
import { useFetching } from "../hooks/useFetching";
import MyLoader from "../components/UI/loader/MyLoader";

const PostIdPage = function () {
  const params = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState(null);
  const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommnetByPostId(id);
    setComments(response.data);
  });


  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id)
  }, []);
  return (
    <div>
      <h3 style={{ textAlign: "center", marginBlockEnd: '20px'  }}>Окрыт пост с № {params.id}</h3>
      {isPostLoading ? (
        <MyLoader />
      ) : (
        <div className="post-page">
          <h2 style={{ textAlign: "center" }}>
            {post?.id}. {post?.title}
          </h2>
          <p style={{ fontSize: "24px" }}>{post?.body}</p>
        </div>
      )}
      <h3 style={{ textAlign: "center", marginBlockEnd: '20px'  }}>Комментарии:</h3>
      {isCommentsLoading 
        ? <MyLoader />
        : (
            <div style={{padding: '20px'}}>
                {comments?.map(comment => (
                    <div key={comment.id}>
                        <h5>{comment.email}</h5>
                        <p style={{ fontSize: "24px" }}>{comment.body}</p>
                    </div>
                ))}
            </div>
        )

      }
    </div>
  );
};
export default PostIdPage;  
