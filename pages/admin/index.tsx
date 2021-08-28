import React from 'react';
import Header from '../../components/header';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AdminTable from './components/table';
import AdminSidenav from '../../components/admin-sidenav'
import { StaticRouter as Router, Switch, Route } from 'react-router-dom';
// import Login from '../../pages/api/auth/Login';
import ButtonArea from "./components/ButtonArea";
import { getSession, session } from 'next-auth/client';
import { useEffect, useState } from 'react';

const Admin = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //     getSession().then((session) => {
  //         if (!session) {
  //             window.location.href = "/"
  //         } else {
  //             setIsLoading(false);
  //         }
  //     });
  // }, []);

  // if (isLoading) {
  //     return <p>Loading...</p>;
  // }

  return (
    <>
      <Header />
      <Router>
        <AdminSidenav />
        <Switch>
          <Route path='/' />
          <Route path='/' />
          <Route exact path='/login'>
            {/* <Login /> */}
          </Route>
        </Switch>
      </Router>

      <ButtonArea />
      {/* <TemporaryDrawer /> */}


      <AdminTable />

    </>
  );
}

export async function getServerSideProps(context: any) {
  const session = await getSession({ req: context.req });

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

export default Admin
