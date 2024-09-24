import "./App.css";
import "/public/Font/Font.style.css";
import { Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/Community/CommunityPage";
import QuestionAndAnswerPage from "./pages/QuestionAndAnswer/QuestionAndAnswerPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import CommunityPostDetail from "./components/CommunityPostDetail/CommunityPostDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/:id" element={<CommunityPostDetail />} />
      <Route path="/question" element={<QuestionAndAnswerPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
