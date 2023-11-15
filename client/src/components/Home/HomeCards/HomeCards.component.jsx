import React from 'react';
import styles from "./HomeCards.module.scss";
// import ReactPlayer from "react-player";

const HomeCards = () => {
    
    return(
    <div className={styles["home-cards"]}>
        <div className={styles["cards"]}>
            <div className={styles["card_left"]}>
                <span>
                A deep-sea community is any community of organisms associated by a shared habitat in the deep sea. Deep sea communities remain largely unexplored, due to the technological and logistical challenges and expense involved in visiting this remote biome.
                </span>

            </div>
            {/* <div className={styles["card_right"]}>
                <ReactPlayer
                className={styles["video_intro"]}
                url="https://www.youtube.com/watch?v=OTXLp81ptCk"
                playing={true}
                muted={true}
                loop={true}
                width="578px"
                height="322px"
                />
            </div> */}
        </div>
    </div>
    )
}
export default HomeCards
