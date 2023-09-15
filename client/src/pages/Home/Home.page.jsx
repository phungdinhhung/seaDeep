import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../ui/Navbar/Navbar.component"
import HomeHeader from "../../components/Home/HomeHeader/HomeHeader.component"
import HomeCards from "../../components/Home/HomeCards/HomeCards.component";
import HomeContent from "../../components/Home/HomeContent/HomeContent.component";
import Footer from "../../components/Footer/Footer.component"
const Home = () => { 
    return(
        <div className={styles["home"]}>
        <Navbar/>
        <HomeHeader/>
        <HomeCards/>
        <HomeContent/>
        <Footer/>
        </div>
    )
}

export default Home;