import React from "react";
import styles from "./Navbar.module.scss"
import { Box, AppBar,Toolbar, Button } from "@mui/material"
import logo from "../../config/images/seadeep-icon.png"
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isLogedIn = useSelector((state) => state.isLogedIn);
    const userRole = useSelector((state) => state.user.userRole)
    const isAuthor = 'customer';
    if(isLogedIn){
        const isAuthor = userRole[0]
        console.log("isAuthor:" + isAuthor)
        console.log("isAuthor:" + typeof isAuthor)
    }
        const logout = () => {
        localStorage.clear();
        dispatch({ type: "CLEAR_SESSION" });
        navigate("/home");
    };
    return(
        <Box className={styles["navbar"]} sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar className={styles["navbar_box"]}>
                
            <div className={styles["navbar_logo"]}>
            <img src={logo} alt="logo SeaDeep"/>
            </div>
            <Box sx={{ flexGrow: 1 }} />
                    <Box  sx={{ display: "flex" }}>
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <NavLink
                                className="d-flex m-auto light-text"
                                style={{ padding: "12px",color: "#fff",textDecoration: "none" }}
                                to="/home"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                className="d-flex m-auto light-text"
                                style={{ padding: "12px",color: "#fff",textDecoration: "none" }}
                                to="/about"
                            >
                                About
                            </NavLink>
                            {isAuthor === "customer" ? (
                                <NavLink
                                className="d-flex m-auto light-text"
                                style={{ padding: "12px",color: "#fff",textDecoration: "none" }}
                                to="/dashboard"
                            >
                                Dashboard
                            </NavLink>
                            ) : 
                            <NavLink
                                className="d-flex m-auto light-text"
                                style={{ padding: "12px",color: "#fff",textDecoration: "none" }}
                                to="/profile"
                            >
                                Profile
                            </NavLink>
                            }
                            
                        </Box>
                    </Box>
                    {isLogedIn ? (
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <div className="d-flex align-items-center">
                                    <Button className={styles["button_log"]}>
                                    <NavLink
                                    className="d-flex m-auto light-text"
                                    style={{ textDecoration: "none" }}
                                    to="/home"
                                    onClick={() => {
                                        logout();
                                    }}
                                >
                                    
                                    <h4>Log Out</h4>
                                </NavLink>
                                    </Button>
                                </div>
                            </Box>
                    ): 
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                                <div className="d-flex align-items-center">
                                    <Button className={styles["button_log"]}>
                                    <NavLink
                                    className="d-flex m-auto light-text"
                                    style={{ textDecoration: "none" }}
                                    to="/login"
                                >
                                    <h4>Login</h4>
                                </NavLink>
                                    </Button>
                                </div>
                            </Box>
                            }
                        </Toolbar>
                    </AppBar>
        </Box>
    )
}
export default Navbar;