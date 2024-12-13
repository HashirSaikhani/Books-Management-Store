import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const { user, logout } = useAuth();
    const router = useRouter();

    const toggleDrawer = (open) => () => {
        setIsDrawerOpen(open);
    };

    const handleHistoryClick = () => {
        if (!user) {
            router.push("/login?redirectTo=/history");
        } else {
            router.push("/history");
        }
    };

    const navLinks = [
        { title: "Books", path: "/books" },
        { title: "Genres", path: "/genres" },
        { title: "Authors", path: "/authors" },
    ];

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar>
                {/* Mobile Menu */}
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: "flex", md: "none" } }}
                >
                    <MenuIcon />
                </IconButton>

                {/* Title */}
                <Typography
                    variant="h6"
                    sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, fontWeight: "bold" }}
                >
                    Book Manager
                </Typography>

                {/* Links for Large Screens */}
                <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                    {navLinks.map((link) => (
                        <Button color="inherit" key={link.title} href={link.path}>
                            {link.title}
                        </Button>
                    ))}
                    <Button color="inherit" onClick={handleHistoryClick}>
                        History
                    </Button>
                </Box>

                {/* Login/Logout Button */}
                {user ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Typography
            sx={{
                fontWeight: "bold",
                fontSize: "1rem",
                color: "secondary", // Matches secondary color
            }}
        >
            {user.email}
        </Typography>
        <Button
            
            onClick={logout}
            variant="contained"
            color="secondary"
            sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                padding: "5px 15px",
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: "secondary.dark",
                    boxShadow: "none",
                },
            }}
        >
            Logout
        </Button>
    </Box>
) : (
    <Button
        onClick={() => router.push("/login")}
        variant="contained"
            color="secondary"
            sx={{
                borderRadius: "20px",
                textTransform: "none",
                fontWeight: "bold",
                padding: "5px 15px",
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: "secondary.dark",
                    boxShadow: "none",
                },
            }}
    >
        Login
    </Button>
)}


                {/* Mobile Drawer */}
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
                        <List>
                            {navLinks.map((link) => (
                                <ListItem button key={link.title}>
                                    <Link href={link.path} passHref>
                                        <Typography>{link.title}</Typography>
                                    </Link>
                                </ListItem>
                            ))}
                            <ListItem button onClick={handleHistoryClick}>
                                <Typography>History</Typography>
                            </ListItem>
                            <ListItem button>
                                {user ? (
                                    <Button fullWidth onClick={logout}>
                                        Logout
                                    </Button>
                                ) : (
                                    <Button fullWidth onClick={() => router.push("/login")}>
                                        Login
                                    </Button>
                                )}
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
