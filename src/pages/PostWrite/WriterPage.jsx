import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../layout/Footer/Footer";
import Logo from "/public/images/LoginPageImage/LogoNoneText.png";
import Navbar from "../../layout/Navbar/Navbar.jsx";

export default function LoginPage() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");



    const handleSubmit = async () => {

        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);

        const writer = user.name;

        const queryParams = new URLSearchParams(location.search);
        const boardGrade = queryParams.get('boardGrade');

        const postData = {
            title,
            content,
            writer,
            boardGrade,
        };

        try {
            const response = await axios.post(
                "http://localhost:8080/api/posts/create",
                postData,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );

            if (response.status === 200) {
                navigate(`/${boardGrade}`);
            } else {
                console.error("글작성 실패");
            }
        } catch (error) {
            console.error("에러 발생:", error);
        }
    };

    const signupNavigate = () => {
        navigate("/signup");
    };

    return (
        <div className="loginContainer">
            <Navbar />
            <input
                type="title"
                className="title"
                placeholder="제목을 입력해주세요"
                required
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="password"
                className="password"
                placeholder="내용를 입력해주세요"
                required
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                className="loginPageButton loginPageSubmitButton"
                onClick={handleSubmit}
            >
                글작성
            </button>
            <div className="footerContainer">
                <Footer />
            </div>
        </div>
    );
}
