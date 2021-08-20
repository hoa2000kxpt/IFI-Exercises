import react from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Home",
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Product",
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: "nav-text"
    },
    {
        title: "Log out",
        path: '/pages/api/auth/Login.tsx',
        icon: <RiIcons.RiLogoutBoxLine />,
        cName: "nav-text"
    }
]

