import React from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <div className="postDetailContainer">
      <p>{}</p>
      <h1>게시글 상세 페이지</h1>
      <p>게시글 ID: {id}</p>
      {/* 실제 데이터를 가져와서 이곳에 게시글 제목, 내용 등을 표시 */}
    </div>
  );
};

export default PostDetail;
