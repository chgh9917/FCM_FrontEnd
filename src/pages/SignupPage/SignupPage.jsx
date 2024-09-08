import React from "react";
import "./SignupPage.style.css";
import Navbar from "../../layout/Navbar/Navbar";

export default function SignupPage() {
  return (
    <div className="signupPageContainer">
      <Navbar />
      <div className="signupPageInputBoxContainer">
        <div className="signupPageTitle">회원가입</div>
        <div className="signupPageTitleInfoContour" />
        <div className="signupPageInfoFormContainer">
          <div className="signupPageInfoEmailFormContainer">
            <div className="inputTitle signupPageInfoEmailFormTitle">
              이메일
            </div>
            <input
              type="email"
              className="inputForm signupPageInfoEmailFormInput"
              placeholder="이메일을 입력해주세요"
            />
          </div>
          <div className="signupPageInfoPasswordFormContainer">
            <div className="inputTitle signupPageInfoPasswordFormTitle">
              비밀번호
            </div>
            <input
              type="password"
              className="inputForm signupPageInfoPasswordFormInput"
              placeholder="비밀번호를 입력해주세요"
            />
          </div>
          <div className="signupPageInfoPersonalInfoFormContainer">
            <div className="smallInputFormContainer signupPagePersonalInfoNameFormContainer">
              <div className="inputTitle signupPagePersonalInfoNameFormTitle">
                이름
              </div>
              <input
                type="text"
                className="smallInputForm inputForm signupPagePersonalInfoNameFormInput"
                placeholder="이름"
              />
            </div>
            <div className="smallInputFormContainer signupPagePersonalInfoAgeFormContainer">
              <div className="inputTitle signupPagePersonalInfoAgeFormTitle">
                나이
              </div>
              <input
                type="number"
                className="smallInputForm inputForm signupPagePersonalInfoAgeFormInput"
                placeholder="나이"
              />
            </div>
          </div>
          <div className="signupPageInfoPersonalInfoFormContainer">
            <div className="smallInputFormContainer signupPagePersonalInfoHeightFormContainer">
              <div className="inputTitle signupPagePersonalInfoHeightFormTitle">
                키(cm)
              </div>
              <input
                type="number"
                className="smallInputForm inputForm signupPagePersonalInfoHeightFormInput"
                placeholder="키"
              />
            </div>
            <div className="smallInputFormContainer signupPagePersonalInfoWeightFormContainer">
              <div className="inputTitle signupPagePersonalInfoWeightFormTitle">
                체중(kg)
              </div>
              <input
                type="number"
                className="smallInputForm inputForm signupPagePersonalInfoWeightFormInput"
                placeholder="체중"
              />
            </div>
          </div>
          <div className="signupPageSubmitButtonContainer">
            <div className="signupPageSubmitButton">회원가입</div>
          </div>
        </div>
      </div>
    </div>
  );
}
