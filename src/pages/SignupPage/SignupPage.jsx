import React, { useState } from "react";
import "./SignupPage.style.css";
import Navbar from "../../layout/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignupPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  const handleSubmit = async () => {
    const signupData = {
      email,
      password,
      name,
      age,
      height,
      weight,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/join",
        signupData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/login");
      } else {
        console.error("회원가입 실패");
      }
    } catch (error) {
      console.error("에러 발생:", error);
    }
  };

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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={age}
                onChange={(e) => setAge(e.target.value)}
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
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
          </div>
          <div className="signupPageSubmitButtonContainer">
            <div className="signupPageSubmitButton" onClick={handleSubmit}>
              회원가입
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
