import React, { useEffect, useState } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function useFetch(url): any {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  !posts ? setLoading(true) : setLoading(false);

  function refetch() {
    !posts
      ? useEffect(() => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => setError(true));
        }, [url])
      : null;
    return { refetch, posts, loading, error };
  }
}
interface Props {
  posts: Post;
  loading: boolean;
  error: boolean;
}
function Fetch() {
  const [inputVal, setInputVal] = useState("");
  const { refetch, posts, loading, error } = useFetch(inputVal);
  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button type="submit" onClick={() => useFetch(inputVal)}>
        Fetch
      </button>
      <button onClick={() => refetch}>Retry</button>
      {posts.map((post) => (
        <div>
          <div>
            <h1>{post.title}</h1>
            <p>{post.id}</p>
            <p>{post.userId}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Fetch;
