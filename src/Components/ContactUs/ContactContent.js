import React, { useState } from "react";
import { contactus } from "../../Assets/Images";
import { Box, TextField, Typography, Button } from "@mui/material";

function ContactContent() {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  // Handler for input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can also clear the form or send the data to an API here
  };

  return (
    <Box
      sx={{
        height: { md: "85vh", sm: "auto" },
        display: "flex",
        background: "#f6f6f6",
        alignItems: "center",
        flexDirection: { md: "row", sm: "column" },
      }}
    >
      <Box
        sx={{
          width: { md: "50%", sm: "80%" },
          height: "100%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <img
          src={contactus}
          alt="contact us"
          style={{
            width: "80%",
            height: "80%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "600", mb: 2 }}>
          Get a Call Back
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: 400 }}>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" type="submit" fullWidth>
            Get a Call Back
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ContactContent;
