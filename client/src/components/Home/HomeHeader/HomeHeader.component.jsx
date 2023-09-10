import React from "react";
import styles from "./HomeHeader.module.scss"
import { Box } from "@mui/material"

const HomeHeader = () => {
    return (
        <Box className={styles["header"]} sx={{flexGrow: 1}}>
            <div className={styles["header_video"]}>
            <video
            src="https://video.wixstatic.com/video/11062b_ea61c0ecc8b34ecd942c42470507e640/720p/mp4/file.mp4" 
            autoPlay 
            loop
            muted
            />
            </div>
        </Box>
    )
}

export default HomeHeader;