import React from "react";
import styles from './AccountCreate.module.scss';
import Header from '../../../../components/Header/Header.component';
import Body from '../../../../components/Body/Body.component';
import { NavLink } from "react-router-dom";

function AccountCreate() {

    return(
        <main className={styles['main-container']}>
        <Header>
            <div>
            <h3>Create Account</h3>
            </div>
        </Header>
    <Body>
    <div className={styles['main-card']}>
        <button type="button" className="btn btn-secondary btn-lg">
                <NavLink to="/dashboard/account">
                    <span>Back</span>
                </NavLink>
        </button>
    </div>
    </Body>
   </main>
    )
}

export default AccountCreate;