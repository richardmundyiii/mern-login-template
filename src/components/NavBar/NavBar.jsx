import { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Button,
  Drawer,
  IconButton,
  Toolbar,
  useMediaQuery,
  useTheme,
  ListItem,
  ListItemText,
  List,
  Box,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ user }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Schedule", path: "/schedule" },
    // ... other links
    { title: "Contact", path: "/contact" },
  ];

  const drawer = (
    <List>
      {navLinks.map(({ title, path }) => (
        <ListItem button key={title} component={Link} to={path}>
          <ListItemText primary={title} />
        </ListItem>
      ))}
    </List>
  );

  function handleLogOut() {}

  return (
    <Container>
      <AppBar position="fixed" color="primary" sx={{ width: "100%" }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <Button key={title} color="inherit" component={Link} to={path}>
                  {title}
                </Button>
              ))}
            </Box>
          )}
          {user ? (
            <Button color="inherit" onClick={handleLogOut}>
              Logout
            </Button>
          ) : (
            <Button color="inherit" component={Link} to="/auth">
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}>
        {drawer}
      </Drawer>
      <Box sx={{ paddingTop: "64px" }}>
        {" "}
        {/* Additional padding for the main content */}
        {/* Main content goes here */}
      </Box>
    </Container>
  );
}
