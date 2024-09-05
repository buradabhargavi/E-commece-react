import React, { useState } from "react";
import { Box, Button, TextField, Typography, Link } from "@mui/material";
import { userLogin } from "../../Assets/Images";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
    if (password !== confirmPassword) {
      console.error("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
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
        <img
          src={userLogin}
          alt="login"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          maxWidth: "500px",
          height: "auto",
          margin: "auto",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F6F6F6",
          boxShadow: 2,
          borderRadius: "30px",
          padding: 3,
        }}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Sign Up
        </Typography>

        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            label="Full Name"
            type="text"
            fullWidth
            margin="normal"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            type="password"
            fullWidth
            margin="normal"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Sign Up
          </Button>
        </form>

        <Box sx={{ mt: 2 }}>
          <span>
            Already have an account?{" "}
            <Link href="/login" underline="none" sx={{ color: "blue" }}>
              Login now
            </Link>
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default Signup;
