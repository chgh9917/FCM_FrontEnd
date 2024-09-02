import "./App.css";
import { Routes, Route } from "react-router-dom";
import CommunityPage from "./pages/Community/CommunityPage";
import QuestionAndAnswerPage from "./pages/QuestionAndAnswer/QuestionAndAnswerPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/question" element={<QuestionAndAnswerPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
