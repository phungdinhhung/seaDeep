import React from 'react'
import { NavLink } from "react-router-dom";
import styles from "./DSideBar.module.scss"
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,  BsFillGearFill}
 from 'react-icons/bs'


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id={styles["sidebar"]} className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className={styles['sidebar-title']}>
            <div className={styles['sidebar-brand']}>
                <BsCart3  className='icon_header'/> SeaDeep
            </div>
            <span className={styles['icon close_icon']} onClick={OpenSidebar}>X</span>
        </div>

        <ul className={styles['sidebar-list']}>
        <li className={styles['sidebar-list-item']}>
                <NavLink className="base-link" to="/dashboard/introduction">
                    <BsGrid1X2Fill className={styles['icon']}/> Home
                </NavLink>
            </li>
            <li className={styles['sidebar-list-item']}>
                    <NavLink className="base-link" to="/dashboard/statistic">
                    <BsFillGrid3X3GapFill className={styles['icon']}/> Statistic
                    </NavLink>

            </li>
            <li className={styles['sidebar-list-item']}>
            <NavLink className="base-link" to="/dashboard/creatures">
                    <BsFillArchiveFill className={styles['icon']}/> Creatures
            </NavLink>
            </li>
            <li className={styles['sidebar-list-item']}>
            <NavLink className="base-link" to="/dashboard/account">
                    <BsPeopleFill className={styles['icon']}/> Account
            </NavLink>
            </li>
            <li className={styles['sidebar-list-item']}>
            <NavLink >
                    <BsFillGearFill className={styles['icon']}/> Log Out
            </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar