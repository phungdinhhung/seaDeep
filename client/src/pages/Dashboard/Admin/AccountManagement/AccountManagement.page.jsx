import React from 'react'
import styles from './AccountManagement.module.scss'
import { NavLink } from "react-router-dom";
import  {Users}   from "../../../../user.api"
import Header from '../../../../components/Header/Header.component';
import Body from '../../../../components/Body/Body.component';

// import { axios } from "../../../../services/HttpClient/HttpClient";

import  Table  from "../../../../ui/Table/table.component"
import { useEffect, useState } from 'react';

function AccountManagement() {
    const [query, setQuery] = useState("");
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     const fetchData = async () => {
    //       const res = await axios.get(`http://localhost:3000/dashboard/account/?q=${query}`);
    //       setData(res.data);
    //     };
    //     if (query.length === 0 || query.length > 2) fetchData();
    //   }, [query]);
  const keys = ["first_name", "last_name", "email"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };
 return(
   <main className={styles['main-container']}>
        <Header>
            <div>
            <h3>Account Management</h3>
            </div>
        </Header>
        <Body>
    <div className={styles['main-card']}>
        <button type="button" className="btn btn-secondary btn-lg">
                <NavLink to="/dashboard/account/create">
                    <span>New Manager</span>
                </NavLink>
        </button>
        <div className={styles["search"]}>
        <input type="text" placeholder='Search...' 
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />
        </div>
    </div>
    <div className="mt-4">
    {/* {<Table data={data} />} */}
    {<Table data={search(Users)} />}
    </div>
        </Body>
   </main>
 )
}

export default AccountManagement;