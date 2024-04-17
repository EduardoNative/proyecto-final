import { Outlet, useNavigate } from "react-router-dom";
import { NavbarTop } from "./NavbarTop";

export default () => {
    return (
        <>
            <NavbarTop />
            <Outlet />
        </>
    );
};