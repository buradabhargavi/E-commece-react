import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(
      "If an account with that email exists, a password reset link will be sent."
    );
    setEmail("");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        backgroundColor: "#F6F6F6",
      }}
    >
      <Typography variant="h5" sx={{ mb: 2 }}>
        Forgot Password
      </Typography>

      <Box
        sx={{
          maxWidth: 400,
          width: "100%",
          backgroundColor: "white",
          padding: 3,
          borderRadius: "10px",
          boxShadow: 2,
        }}
      >
        <Typography variant="body1" sx={{ mb: 2 }}>
          Enter your email address below and we'll send link to reset your
          password.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Send Reset Link
          </Button>
        </form>

        {message && (
          <Typography variant="body2" sx={{ mt: 2, color: "green" }}>
            {message}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ForgotPassword;
