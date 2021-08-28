import ProductHeaderSidebar from "./components/ProductHeaderSidebar";
import ProductTable from "./components/ProductTable"
import { getSession, session } from 'next-auth/client';

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



export default Products;