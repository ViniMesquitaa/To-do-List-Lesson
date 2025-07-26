import { Route, Routes, Navigate } from "react-router-dom";
import TodoPage from "../pages/TodoPage";
import LoginPage from "../pages/LoginPage";
import UnderConstruction from "../components/shared/UnderConstruction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/building" element={<UnderConstruction />} />
    </Routes>
  );
}

export default App;
