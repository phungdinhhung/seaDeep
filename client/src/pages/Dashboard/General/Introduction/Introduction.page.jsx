import React from "react";
import styles from "./Introduction.module.scss";
import { Button } from "@mui/material";
import Header from '../../../../components/Header/Header.component';

function Introduction() {
    return (
        
        <div className={styles["introduction"] + " w-100"}>
            <Header>
            <div>
            <h3>Introduction</h3>
            </div>
        </Header>
            <div className="h-100 d-flex mt-4 ">
                    <div className={styles['main-cards']}>
                        
                        <h1 className="">Welcome to our website!</h1>
                        <p>
                            The dashboard will assist you with many features in the
                            system. All these features will help you a lot in
                            the management process. We always ensure that users
                            will have the best experience with the website.
                        </p>
                        <Button variant="contained">Learn More</Button>
                    </div>
            </div>
        </div>
    );
}

export default Introduction;
