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
  Menu,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";

export default function NavBar({ user }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const navLinks = [
    { title: "Home", path: "/" },
    // ... other links
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

  function handleUserMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseUserMenu(event) {
    setAnchorEl(null);
  }

  function handleLogOut(event) {
    console.log("working");
  }

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
          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {navLinks.map(({ title, path }) => (
                <Button key={title} color="inherit" component={Link} to={path}>
                  {title}
                </Button>
              ))}
            </Box>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
            <IconButton onClick={handleUserMenu} color="inherit" size="large">
              <Avatar src={user ? user.img : "default_avatar.png"} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleCloseUserMenu}>
              {user ? (
                <>
                  <MenuItem
                    onClick={handleCloseUserMenu}
                    component={Link}
                    to="/profile">
                    Profile
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                </>
              ) : (
                <MenuItem
                  onClick={handleCloseUserMenu}
                  component={Link}
                  to="/auth">
                  Login
                </MenuItem>
              )}
            </Menu>
          </Box>
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
