import { links } from "@/utils/NavbarLinks";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import FlexBetween from "./FlexBetween";
import ModeToggle from "./ThemeToggleButton";
const Navbar = () => {
    const { palette } = useTheme();
    console.log(palette)
    const [active, setActive] = useState("home");
    const location = useLocation();

    return (
        <FlexBetween mb="0.25rem" p="0.5rem 0" color={palette.grey[300]}>
            <Box gap="0.75rem" alignItems="center" display="flex" justifyContent="space-between">
                <LeaderboardIcon sx={{ fontSize: "28px" }} />
                <Typography variant="h4" fontSize="1.2rem" className="ml-2">
                    XYZ
                </Typography>
            </Box>
            <FlexBetween gap="2rem">
                {links.map((link) => (
                    <Box
                        key={link.label}
                        className={`capitalize ${active === link.label ? 'text-gray-100 no-underline' : 'text-gray-700'}`}
                    >
                        <Link
                            to={link.path}
                            onClick={() => setActive(link.label)}
                            className={`capitalize font-light tracking-wide `}
                            style={{ textDecoration: 'none', color: location.pathname === link.path ? palette.primary.main : palette.grey[700] }}
                        >
                            {link.label}
                        </Link>
                    </Box>
                ))}
            </FlexBetween>
            <ModeToggle />
        </FlexBetween>
    );
};

export default Navbar;
