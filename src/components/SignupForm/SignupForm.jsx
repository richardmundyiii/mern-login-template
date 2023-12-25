import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Avatar,
  TextField,
  Typography,
  Grid,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import CssBaseline from "@mui/material/CssBaseline";
import * as usersApi from "../../utilities/users-api";

export default function SignupForm({ handleRegOrLog }) {
  const navigate = useNavigate();

  // Manage State for User Registration
  const [registration, setRegistration] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Show/Hide Password
  const [showPassword, setShowPassword] = useState(false);

  // Easy error control
  const [error, setError] = useState("");

  // Update state as user types
  function handleChange(event) {
    setRegistration({
      ...registration,
      [event.target.name]: event.target.value,
    });
    setError("");
  }

  // Make API call to create user
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const newUser = await usersApi.signUp(registration);
      setRegistration(newUser);
      navigate("/");
    } catch (error) {
      setError("Signup Failed - Try Again");
    }
  }

  //Toggle password visibility
  // function handleClickShowPassword(event) {
  //   setShowPassword((preShowPassword) => !prevShowPassword);
  // }

  //Disable registration if both passwords don't match
  const disable = registration.password !== registration.confirmPassword;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            onChange={handleChange}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            onChange={handleChange}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle Password Visiability">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            autoComplete="current-password"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton aria-label="Toggle Password Visiability">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={disable}
            sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
          <Grid container>
            <Grid item>
              <Button onClick={handleRegOrLog}>
                {"Already have an account?"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
