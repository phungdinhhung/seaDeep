import React, { useState } from "react";
import styles from './CreaturesManagement.module.scss'
import { NavLink } from "react-router-dom";
import Header from '../../../../components/Header/Header.component';
import Body from '../../../../components/Body/Body.component';
import BasicSnackbar from '../../../../components/Snackbar/BasicSnackbar/BasicSnackbar.component'
function CreaturesManagement() {
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState({
        isOpen: false,
        content: "",
    });
 return(
   <main className={styles['main-container']}>
        <Header>
            <div>
            <h3>Creatures Management</h3>
            </div>
        </Header>
   <Body>
        <BasicSnackbar
                    isOpen={message.isOpen}
                    content={message.content}
                    onClose={() => setMessage({ content: "", isOpen: false })}
                />
        <div className={styles['main-card']}>
        <button type="button" className="btn btn-secondary btn-lg">
                <NavLink to="/dashboard/creatures/create">
                    <span>New Creature</span>
                </NavLink>
            </button>
            <div className={styles["search"]}>
        <input type="text" placeholder='Search...' 
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        </div>
            </div>
        <div className="d-flex mt-4 ">
                    <div className={styles['main-cards']}>
                        
                    </div>
            </div>
            
   </Body>
</main>
 )
}

export default CreaturesManagement;

// <th scope="col">#</th>
//       <th scope="col">Creature</th>
//       <th scope="col">Zone</th>
//       <th scope="col">Latest updates</th>
//       <th scope="col">Manage</th>