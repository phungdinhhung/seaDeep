import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../ui/Navbar/Navbar.component"
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader.component"
const Home = () => { 
    return(
        <div className={styles["home"]}>
        <Navbar></Navbar>
        <HomeHeader></HomeHeader>
        <h2>Home Page</h2>
        </div>
    )
}

export default Home;