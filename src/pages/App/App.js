import "./App.css";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
