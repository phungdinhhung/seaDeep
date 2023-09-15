import React, {useState, useEffect} from 'react';
import styles from './HomeContent.module.scss';
import SeaZone from "../HomeZone/SeaZone.component";
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
import { NavLink} from "react-router-dom";
import { Button} from "@mui/material"

const HomeContent = () => {
    const [cloudPositions, setCloudPositions] = useState([]);

    useEffect(() => {
    const containerWidth = window.innerWidth
    const containerHeight = window.innerHeight

    const numClouds = 10;
    
    const newCloudPositions = [];
    for (let i = 0; i < numClouds; i++) {
      const top = Math.random() * (containerHeight - 600);
      const left = Math.random() * (containerWidth - 200);
      newCloudPositions.push({ top, left });
    }
    
    setCloudPositions(newCloudPositions);
    }, []);

    return (
        <div className={styles["home-content"]}>
            <div className={styles["content-header"]}>
            <h1>A New Generation of Ocean Data</h1>
            </div>
            <div className={styles["content-header__zone"]}>
                <WbSunnyIcon className={styles["icon_sun"]}/>
                {cloudPositions.map((position, index) => (
                <CloudIcon
                key={index}
                style={{
                    color: "#F2F3F4",
                    fontSize: "150px",
                    position: 'absolute',
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    }}
        />
      ))}
            </div>
            <div className={styles["content-box"]}>
                <div className={styles["zone-rank"]}> --- Surface --- </div>
                <SeaZone 
                zone="Epipelagic"
                ></SeaZone>
                <div className={styles["zone-rank"]}> --- 200M --- </div>
                <SeaZone 
                zone="Mesopelagic"
                ></SeaZone>
                <div className={styles["zone-rank"]}> --- 1000M --- </div>
                <SeaZone 
                zone="Bathypelagic"
                ></SeaZone>
                <div className={styles["zone-rank"]}> --- 4000M --- </div>
                <SeaZone 
                zone="Abyssopelagic"
                ></SeaZone>
                <div className={styles["zone-rank"]}> --- 6000M --- </div>
                <SeaZone 
                zone="Hadalpelagic"
                ></SeaZone>
            </div>
        <div className={styles["content-footer"]}>
            <div className="d-flex align-items-center">
                <Button className={styles["button_discovery"]}>
                    <NavLink
                        className="d-flex m-auto light-text"
                        style={{ textDecoration: "none" }}
                            to="/creatures"
                            >
                            <h3>Discovery</h3>
                        </NavLink>
                    </Button>
                </div>
        </div>
    </div>

    )
}

export default HomeContent