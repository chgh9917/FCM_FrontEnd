import React, { useEffect, useState } from "react";
import Logo from "/public/images/Favicon/Calorie.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";

export default function Banner() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 세션에서 로그인 상태를 확인
  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    console.log("User session:", userSession);
    if (userSession) {
      setIsLoggedIn(true);
    }
  }, []);

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
    if (isLoggedIn) {
      sessionStorage.removeItem("user");
      setIsLoggedIn(false);
      alert("로그아웃되었습니다.");
    } else {
      navigate("/login");
    }
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
        <div className="navbarLoginText">
          {isLoggedIn ? "로그아웃" : "로그인"}
        </div>
      </div>
    </div>
  );
}