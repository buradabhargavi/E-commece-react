import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Link,
  Container,
  Button,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LoginContext } from "../../Store/LoginContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    text: {
      primary: "#ffffff",
    },
  },
});

const StoreNavBar = () => {
  const ctx = useContext(LoginContext);
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body1"
              component="div"
              sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              <Link
                color="inherit"
                href="home"
                underline="none"
                sx={{ marginRight: 5 }}
              >
                Home
              </Link>
              <Link
                color="inherit"
                href="store"
                underline="none"
                sx={{ marginRight: 5 }}
              >
                Store
              </Link>
              <Link
                color="inherit"
                href="aboutus"
                underline="none"
                sx={{ marginRight: 5 }}
              >
                About Us
              </Link>
              <Link color="inherit" href="contactus" underline="none">
                Contact Us
              </Link>
            </Typography>
            <Button variant="contained">cart</Button>
            <Button color="inherit" onClick={() => ctx.Logout()}>
              Logout
            </Button>
          </Container>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default StoreNavBar;
