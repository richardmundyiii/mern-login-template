import { useState } from "react";
import { Button, Container } from "@mui/material";
import SignupForm from "../../components/SignupForm/SignupForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);

  function handleRegOrLog() {
    setShowSignUp(!showSignUp);
  }

  return (
    <Container>
      {showSignUp ? (
        <SignupForm handleRegOrLog={handleRegOrLog} />
      ) : (
        <LoginForm handleRegOrLog={handleRegOrLog} />
      )}
    </Container>
  );
}
