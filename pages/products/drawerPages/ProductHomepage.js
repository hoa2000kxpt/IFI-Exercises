import React from "react";
import ProductHeaderSidebar from "../components/ProductHeaderSidebar";
import ProductTable from "../components/ProductTable";
import { getSession, session } from 'next-auth/client';

const ProductHomePage = props => {
  return (
    <>
      <ProductHeaderSidebar />
      <h1>This is Product Homepage</h1>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  console.log(session)

  if (!session || session.user.name != "user") {
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

export default ProductHomePage;
