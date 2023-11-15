import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Introduction from "../../pages/Dashboard/General/Introduction/Introduction.page"
import Dashboard from "../../ui/Dashboard/Statistic.Dashboard/Statistic.page"
import Creatures from "../../pages/Dashboard/Manager/CreaturesManagement/CreaturesManagement.page"
import Account from "../../pages/Dashboard/Admin/AccountManagement/AccountManagement.page"
import AccountCreate from "../../pages/Dashboard/Admin/ManagerAccount/AccountCreate.page"

export default function GeneralRouter() {
    return (
        <Routes>
            <Route path="introduction" element={<Introduction />} />
            <Route path="" element={<Navigate to="/introduction" replace />} />
            <Route path="statistic" element={<Dashboard/> } />
            <Route path="creatures" element={<Creatures/>} />
            <Route path="account" element={<Account/>} />
            <Route path="account/create" element={<AccountCreate/>} />
        </Routes>
    )
}