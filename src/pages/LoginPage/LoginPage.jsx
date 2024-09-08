import React from "react";
import "./LoginPage.style.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const signupNavigate = () => {
    navigate("/signup");
  };

  return (
    <div className="loginContainer">
      <div className="loginTitle">로그인</div>
      <div className="loginSubTitle">음식 칼로리 분석 사이트</div>
      <input
        type="email"
        className="loginEmail"
        placeholder="이메일을 입력해주세요"
        required
      />
      <input
        type="password"
        className="loginPassword"
        placeholder="비밀번호를 입력해주세요"
        required
      />
      <button className="loginPageSubmitButton">로그인</button>
      <div className="loginPageSignupAskContainer">
        <div className="loginPageSignupQuestion">아직 회원이 아니신가요?</div>
        <div className="loginPageGoSignupPage" onClick={signupNavigate}>
          회원가입
        </div>
      </div>
    </div>
  );
}
