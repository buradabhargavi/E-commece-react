import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { userLogin } from "../../Assets/Images";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: { md: "40%" },
          alignContent: "center",
          display: { sm: "none", lg: "flex", xs: "none" },
          textAlign: "center",
        }}
      >
        <img src={userLogin} alt="login"></img>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          maxWidth: "500px",
          height: "500px",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          background: "F6F6F6",
          boxShadow: 2,
          borderRadius: "30px",
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Login
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Login
          </Button>
        </form>
        <Box sx={{ mt: 2 }}>
          <Link to="/forgot-password" underline="none" sx={{ color: "blue" }}>
            Forgot Password?
          </Link>
        </Box>
        <Box sx={{ mt: 1 }}>
          <span>
            Don't have an account?
            <Link to="/signup" underline="none" sx={{ color: "blue" }}>
              Sign up now
            </Link>
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
