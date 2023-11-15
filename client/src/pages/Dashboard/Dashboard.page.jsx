import { useState } from 'react'
import styles from './Dashboard.module.scss'
import Header from '../../ui/Dashboard/Header/DHeader.component'
import Sidebar from '../../ui/Dashboard/SideBar/DSideBar.component'
// import Home from '../../ui/Dashboard/Home.Dashboard/DHome.component'
import GeneralRouter from "../../routes/General/GeneralRouter";

function Dashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className={styles['grid-container']}>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <div
                        className={
                            styles["dashboard_right_body"] +
                            " w-100 dashboard_right"
                        }
                    >
                        <div
                            className={
                                styles["dashboard_right_page"]
                            }
                        >
                            <GeneralRouter></GeneralRouter>
                        </div>
                    </div>
    </div>
  )
}

export default Dashboard
