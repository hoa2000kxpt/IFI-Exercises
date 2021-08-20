import React from 'react';
import Header from '../../components/header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AdminTable from './components/table';
import AdminSidenav from '../../components/admin-sidenav'
import {StaticRouter as Router, Switch, Route } from 'react-router-dom';
import Login from '../../pages/api/auth/Login';
import ButtonArea from "./components/ButtonArea";
import TemporaryDrawer from "./components/TemporaryDrawer";

const Admin = () => {
    return (
        <>
            <Header />
            <Router>
                <AdminSidenav />
                <Switch>
                    <Route exact path='/' />
                    <Route path='/' />
                    <Route path='/' component={Login}/>
                </Switch>
            </Router>

            <ButtonArea />
            {/* <TemporaryDrawer /> */}


            <AdminTable />

        </>

    );
}

export default Admin
