import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./QuestionAndAnswerPage.style.css";
import axios from "axios";

export default function CommunityPage() {
  // State for posts fetched from the backend
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/posts/question");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
      <div className="communityContainer">
        <Navbar />
        <h1 className="communityPageTitle">Q&A</h1>
        <div className="communityPageHR" />
        <ul className="postList">
          {currentPosts.map((post) => (
              <li key={post.id} className="postItem">
                <Link className="postLink" to={`/community/${post.id}`}>
                  <span className="postTitle">{post.title}</span>
                  <div className="postInfoContainer">
                    <span className="postAuthor">{post.author}</span>
                    <span className="postDate">{post.date}</span>
                  </div>
                </Link>
              </li>
          ))}
        </ul>

        <div className="pagination">
          <button
              className="movementButton"
              onClick={() => handlePageChange(currentPage - 5)}
              disabled={currentPage === 1}
          >
            {"<<"}
          </button>
          <button
              className="movementButton"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
          >
            {"<"}
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
              <button
                  key={index + 1}
                  onClick={() => handlePageChange(index + 1)}
                  className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
          ))}

          <button
              className="movementButton"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
          >
            {">"}
          </button>
          <button
              className="movementButton"
              onClick={() => handlePageChange(currentPage + 5)}
              disabled={currentPage === totalPages}
          >
            {">>"}
          </button>
        </div>

        <div className="writeButtonContainer">
          <button className="writeButton">글쓰기</button>
        </div>
      </div>
  );
}