import React from "react";
import AdminSidenav from '../components/admin-sidenav';
import { getSession, session } from 'next-auth/client';

const AdminHomepage = props => {
  return (
    <>
      <AdminSidenav />
      <h1>This is Admin Homepage</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log(session)

  if (!session || session.user.name != "admin") {
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


export default AdminHomepage;
