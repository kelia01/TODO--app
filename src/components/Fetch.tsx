import React, { useEffect, useState, useCallback } from "react";
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
function useFetch(url: string){
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  !posts ? setLoading(true) : setLoading(false);

  function refetch() {
    !posts
      ? useEffect(() => {
          const fetchData = async () => {
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error status: ${response.status}`)
                }
                const result = await response.json();
                setPosts(result);
            } catch(err) {
                setError(err)
            } finally {
                setLoading(false);
            }
          }
          fetchData();
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
