import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import styles from "./DHeader.module.scss"
function Header({OpenSidebar}) {
  return (
    <header className={styles['header']}>
        <div className={styles['menu-icon']}>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right'>
            <BsFillBellFill size = '24' className='icon ml-4'/>
            <BsFillEnvelopeFill size = '24' className='icon ml-4'/>
            <BsPersonCircle size = '24' className='icon ml-4 mr-4'/>
        </div>
    </header>
  )
}

export default Header