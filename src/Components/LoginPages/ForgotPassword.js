import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBcgjBRt7G81Hr-VFu8FHILVbpJgFF7Y30",
        {
          method: "POST",
          body: JSON.stringify({
            requestType: "PASSWORD_RESET",
            email: email,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email. Please try again.");
      }

      setMessage(
        "If an account with that email exists, a password reset link will be sent."
      );
      setEmail("");
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
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
          Enter your email address below and we'll send a link to reset your
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
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            disabled={isLoading}
          >
            {isLoading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Send Reset Link"
            )}
          </Button>
        </form>

        {message && (
          <Typography variant="body2" sx={{ mt: 2, color: "green" }}>
            {message}
          </Typography>
        )}

        {error && (
          <Typography variant="body2" sx={{ mt: 2, color: "red" }}>
            {error}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default ForgotPassword;
