import React from "react";
import Header from "./header/index";
import NavBar from "./navbar/index";

const MainLayout = ({children}) => {
    return (
        <>
            <Header />
                {children}
        </>
    )
}

export default MainLayout;