import React from "react";
import "./Footer.style.css";
import Logo from "/public/images/Favicon/Calorie.png";

export default function Footer() {
  return (
    <div className="footerContentContainer">
      <div className="footerInfoContainer">
        <img className="footerInfoLogo" src={Logo} />
        <div className="footerInfoTextContainer">
          <div className="footerInfoPhoneNumber">전화번호 : 010-1234-5678</div>
          <div className="footerInfoCopyright">
            Copyright : 기업 연계 프로젝트
          </div>
        </div>
      </div>
      <div className="footerButtonContainer">
        <div className="footerGoQustionButton">문의하기</div>
        <div className="footerFrequencyQustion">자주 묻는 질문</div>
      </div>
    </div>
  );
}
