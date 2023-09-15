import React from 'react';
import styles from './MesoZone.module.scss'
const MesoZone = () => {
    return(
        <div className={styles["meso-zone"]}>
            <div className={styles["zone-box"]}>
                <div className={styles["zone-image"]}>

                </div>
                <div className={styles["zone-text"]}>
                    <h3></h3>
                    <span></span>
                </div>
            </div>
        </div>
    )
}

export default MesoZone;