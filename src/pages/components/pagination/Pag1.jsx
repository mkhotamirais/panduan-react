import { useEffect, useState } from "react";
import axios from "axios";

const Pag1 = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => setPosts(res.data));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const totalPost = posts.length;
  const recordPerPage = 7;

  const firstIndex = currentPage * recordPerPage;
  const lastIndex = firstIndex - recordPerPage;
  const currentPosts = posts.slice(lastIndex, firstIndex);

  const nPage = Math.ceil(totalPost / recordPerPage);
  const pageNumbers = [...Array(nPage + 1).keys()].slice(1);

  const nextPage = () => (currentPage !== nPage ? setCurrentPage(currentPage + 1) : null);
  const prevPage = () => (currentPage !== 1 ? setCurrentPage(currentPage - 1) : null);

  return (
    <>
      <h3>Pagination Model 1</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-7 gap-1">
        {posts &&
          currentPosts.map((post) => (
            <article key={post.id} className="mb-2 text-sm border p-1 rounded">
              <h3 className="font-semibold">Title: {post.title.substring(0, 8)}</h3>
              <p>Content: {post.body.substring(0, 25)}...</p>
            </article>
          ))}
      </div>
      <div>
        <button disabled={currentPage === 1 && true} onClick={prevPage} className="border px-2 disabled:opacity-50">
          Prev
        </button>
        {pageNumbers.map((num, i) => (
          <button
            onClick={() => setCurrentPage(num)}
            key={i}
            className={`border px-2 hover:bg-blue-500 ${currentPage === num ? "bg-blue-500" : ""}`}
          >
            {num}
          </button>
        ))}
        <button disabled={currentPage === nPage && true} onClick={nextPage} className="border px-2 disabled:opacity-50">
          Next
        </button>
      </div>
    </>
  );
};

export default Pag1;
