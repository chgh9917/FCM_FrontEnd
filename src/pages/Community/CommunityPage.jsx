import React, { useState, useEffect } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import {Link, useNavigate} from "react-router-dom";
import "./CommunityPage.style.css";
import axios from "axios";

export default function CommunityPage() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const writerPageNavigate = () => {
        navigate("/write?boardGrade=community");
    };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/posts/community");
        setPosts(response.data);
        console.log(response.data)
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
        <h1 className="communityPageTitle">커뮤니티</h1>
        <div className="communityPageHR" />
        <ul className="postList">
          {currentPosts.map((post) => (
              <li key={post.id} className="postItem">
                <Link className="postLink" to={`/community/${post.id}`}>
                  <span className="postTitle">{post.title}</span>
                  <div className="postInfoContainer">
                    <span className="postAuthor">{post.writer}</span>
                    <span className="postDate">{post.createAt}</span>
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
          <button className="writeButton" onClick={writerPageNavigate}>글쓰기</button>
        </div>
      </div>
  );
}