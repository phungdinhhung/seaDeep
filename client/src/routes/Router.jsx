import React from 'react';
import {
   // BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
} from 'react-router-dom';
import Home from '../pages/Home/Home.page';
import Login from '../pages/Login/Login.page';
import Register from '../pages/Register/Register.page';
import Dashboard from '../pages/Dashboard/Dashboard.page'

function AppRouter() {
   return (
      <Routes>
         <Route path="/login" element={<Login />}></Route>
         <Route path="/register" element={<Register />}></Route>
         <Route path="/home" element={<Home />}></Route>
         <Route path="/" element={<Navigate to="/home" />}></Route>
         <Route
                path="/dashboard/"
                element={<Navigate to="/dashboard/introduction" replace />}
            ></Route>
         <Route path="/dashboard/*" element={< Dashboard/>}></Route>
      </Routes>
   );
}

export default AppRouter;
