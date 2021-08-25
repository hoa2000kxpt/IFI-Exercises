import react from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import styles from './admin-sidebar.module.css'; // CSS Modules
import AdminSidenav from './admin-sidenav';

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: `${styles.navText}`
    },
    {
        title: "Product",
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: `${styles.navText}`
    },
    {
        title: "Log out",
        path: '/login',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: `${styles.navText}`
    }
]

// const SidebarData = (props) => {
//     const sidebarData = [
//         [
//                 {
//                     title: "Home",
//                     path: '/',
//                     icon: <AiIcons.AiFillHome />,
//                     cName: `${styles.navText}`
//                 },
//                 {
//                     title: "Product",
//                     path: '/',
//                     icon: <FaIcons.FaCartPlus />,
//                     cName: `${styles.navText}`
//                 },
//                 {
//                     title: "Log out",
//                     path: '/login',
//                     icon: <RiIcons.RiLogoutBoxLine />,
//                     cName: `${styles.navText}`
//                 }
//             ]
//         ]

//         return (
//             <>
//                 <ul>
//                     {props.sidebarData.map((data) => {
//                         <AdminSidenav 
//                         key={data.id}
//                         title={data.title} 
//                         path={data.path}
//                         icon={data.icon} 
//                         cName={data.cName} 
//                         />
//                     })}
//                 </ul>
//             </>
//         );
// }

// export default SidebarData

