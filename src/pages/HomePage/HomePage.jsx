import React from "react";
import "./HomePage.style.css";
import Navbar from "../../layout/Navbar/Navbar";
import Benefit from "./components/Benefit";
import Footer from "../../layout/Footer/Footer";

export default function HomePage() {
  return (
    <div className="homePageContainer">
      <Navbar />
      <div className="bannerContainer">
        <div className="bannerLeftContainer">
          <div className="bannerLeftTextContainer">
            <div className="bannerTitleText">내가 지금 먹고 있는</div>
            <div className="bannerTitleText">음식 칼로리는?</div>
          </div>
          <div className="bannerButton">AI 분석 바로가기</div>
        </div>
        {/* 해당 부분 auto image slider 구현 필요 */}
        <img className="imageBannerSilder" />
      </div>
      <div className="benefitContentContainer">
        <Benefit content={"걱정되는 칼로리 해결"} />
        <div className="benefitContour"></div>
        <Benefit content={"식단 조절 기능"} />
        <div className="benefitContour"></div>
        <Benefit content={"서비스 무료 제공"} />
      </div>
      <div className="imageSliderContainer">
        <div className="imageSilderHeaderTitle"></div>
        {/* 이미지 슬라이드 부분 */}
        <div className="imageSlider"></div>
      </div>
      <div className="footerSliderContour"></div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
}
