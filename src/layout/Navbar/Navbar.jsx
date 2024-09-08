import React from "react";
import Logo from "/public/images/Favicon/Calorie.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";

export default function Banner() {
  const navigate = useNavigate();

  const homePageNavigate = () => {
    navigate("/");
  };

  const communityNavigate = () => {
    navigate("/community");
  };

  const questionAnswerNavigate = () => {
    navigate("/question");
  };

  const loginNavigate = () => {
    navigate("/login");
  };

  return (
    <div className="navbarContainer">
      <div className="navbarNavigateContainer">
        <img
          className="navbarNavigate navbarLogo"
          src={Logo}
          onClick={homePageNavigate}
        />
        <div
          className="navbarNavigate navbarCommunityAnchor"
          onClick={communityNavigate}
        >
          커뮤니티
        </div>
        <div
          className="navbarNavigate navbarQuestionAnchor"
          onClick={questionAnswerNavigate}
        >
          Q&A
        </div>
      </div>
      <div className="navbarNavigate navbarLoginButton" onClick={loginNavigate}>
        <div className="navbarLoginText">로그인</div>
      </div>
    </div>
  );
}
