import React, { useEffect, useState } from "react";
import Logo from "/public/images/NavbarImage/LogoNoneText.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.style.css";

export default function Banner() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
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
      <div className="navbarHomeNavigateContainer" onClick={homePageNavigate}>
        <img className="navbarNavigate navbarLogo" src={Logo} />
        <div className="navbarNavigate navbarHomeAnchor">FCM</div>
      </div>
      <div className="navbarNavigateSet">
        <div className="navbarNavigate" onClick={communityNavigate}>
          커뮤니티
        </div>
        <div className="navbarNavigate" onClick={questionAnswerNavigate}>
          Q&A
        </div>
        <div className="navbarNavigate" onClick={loginNavigate}>
          {isLoggedIn ? "로그아웃" : "로그인"}
        </div>
      </div>
    </div>
  );
}
