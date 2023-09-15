import React from 'react';
import styles from './SeaZone.module.scss'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import discZoneService  from "../../../services/DiscZone"
const SeaZone = ({zone}) => {
    return (
        <div className={styles['sea-zone']}>
            <div className={styles[zone]}>
            <div className={styles["zone-box"]}>
                <div className={styles["zone-flex"]}>
                    <Splide 
                    options={{ 
                        type: "loop",
                        perPage: 3, 
                        gap: "1.5rem",
                        autoplay: true,
                        pauseOnHover:false,
                        focus: "center",
                        }}>
                    <SplideSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg" alt="" />
                    </SplideSlide>
                    <SplideSlide>
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiligzRYXjUmA6nqZO4zkQMwaTnUYLOG31Qq4heJHaAJVyWf2rfsMLn5QszVfD_pOqjEbLOu19nErqTc4LMQ5UCc1EHIV4FFyzGIUqT-AkIJz-KHXQZ47MuKROsy98zJgrY8qf0-83N1Gohf0KDd2epgJ3jIs2hmNQ-pEALk7VccJum4ZAS6jOnhKrH3g/w400-h356/Foxaspis_novemura-novataxa_2023-Gai,_Lin_Shan_Ferron_Donoghue.jpg" alt="" />
                    </SplideSlide>
                    <SplideSlide>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/37/Killerwhales_jumping.jpg" alt="" />
                    </SplideSlide>
                    <SplideSlide>
                    <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiligzRYXjUmA6nqZO4zkQMwaTnUYLOG31Qq4heJHaAJVyWf2rfsMLn5QszVfD_pOqjEbLOu19nErqTc4LMQ5UCc1EHIV4FFyzGIUqT-AkIJz-KHXQZ47MuKROsy98zJgrY8qf0-83N1Gohf0KDd2epgJ3jIs2hmNQ-pEALk7VccJum4ZAS6jOnhKrH3g/w400-h356/Foxaspis_novemura-novataxa_2023-Gai,_Lin_Shan_Ferron_Donoghue.jpg" alt="" />
                    </SplideSlide>
                    </Splide>
                    <div className={styles["zone-text"]}>
                    <h1>{zone} Zone</h1>
                    <p>{discZoneService.discZone(zone)}</p>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SeaZone;