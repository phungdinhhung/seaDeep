<<<<<<< HEAD
import React, {useState, useEffect} from "react";
=======
import React from "react";
>>>>>>> eab3d8bf659b5bfcdf5ca7ae2e281cd113bc485d
import styles from "./HomeHeader.module.scss"
import { Box } from "@mui/material"

const HomeHeader = () => {
    const [moveY, setMoveY]= useState("-100")


    useEffect(() => {
        const handleScroll = () => {
            let scroll = (window.scrollY / 2) - 100;
            setMoveY(scroll)
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            // Remove event listener when component unmounts
            window.removeEventListener("scroll", handleScroll);
          };
    },[])
    return (
        <Box className={styles["header"]} sx={{flexGrow: 1}}>
<<<<<<< HEAD
            <div className={styles["header_video"]}
            style={{width: "100%",
                height: "900px",
                left: "0px",
                top: "0px",
                willChange: "transform",
                transform: `translateY(${moveY}px)`,
                zIndex: "-1",
                position: "relative",
            }}
            >
=======
            <div className={styles["header_video"]}>
>>>>>>> eab3d8bf659b5bfcdf5ca7ae2e281cd113bc485d
            <video
            src="https://video.wixstatic.com/video/11062b_ea61c0ecc8b34ecd942c42470507e640/720p/mp4/file.mp4" 
            autoPlay 
            loop
            muted
            />
            </div>
<<<<<<< HEAD
            <div className={styles["header_slogan"]}>
                <div className={styles["slogan_box"]}>
                    <p>SeaDeep</p>
                    <h3>Underwater Deep</h3>
                </div>
            </div>
        </Box>

=======
        </Box>
>>>>>>> eab3d8bf659b5bfcdf5ca7ae2e281cd113bc485d
    )
}

export default HomeHeader;