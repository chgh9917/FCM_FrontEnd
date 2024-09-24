import React, { useState } from "react";
import Navbar from "../../layout/Navbar/Navbar";
import { Link } from "react-router-dom";
import "./CommunityPage.style.css";

const posts = [
  { id: 1, title: "테스트1", author: "차지태", date: "2024.09.24" },
  { id: 2, title: "테스트2", author: "이충현", date: "2024.09.25" },
  { id: 3, title: "테스트3", author: "배준형", date: "2024.09.26" },
  { id: 4, title: "테스트4", author: "최근호", date: "2024.09.27" },
  { id: 5, title: "테스트5", author: "배대한", date: "2024.09.28" },
  { id: 6, title: "테스트6", author: "이선재", date: "2024.09.29" },
  { id: 7, title: "테스트7", author: "차지태", date: "2024.09.30" },
  { id: 8, title: "테스트8", author: "이충현", date: "2024.09.31" },
  { id: 9, title: "테스트9", author: "배준형", date: "2024.10.01" },
  { id: 10, title: "테스트10", author: "최근호", date: "2024.10.02" },
  { id: 11, title: "테스트11", author: "배대한", date: "2024.10.03" },
  { id: 12, title: "테스트12", author: "이선재", date: "2024.10.04" },
];

export default function CommunityPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

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
