import ProductHeaderSidebar from "./components/ProductHeaderSidebar";
import ProductTable from "./components/ProductTable";
import ProductHomepage from "./drawerPages/ProductHomepage"
import { getSession, session } from 'next-auth/client';
import { Route, Switch } from "react-router-dom";


const Products = () => {
    return (
        <>
                <ProductHeaderSidebar />
                <ProductTable />

                

        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

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



export default Products;