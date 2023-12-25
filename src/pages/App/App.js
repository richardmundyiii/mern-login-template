import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import Homepage from "../Homepage/Homepage";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
      <NavBar user={user} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </div>
  );
}

export default App;
