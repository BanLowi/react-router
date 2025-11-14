// react placeholder
import { Outlet } from "react-router-dom";

// react components
import Header from "../components/Header"

export default function SiteLayout() {

    return (

        <div>
            <Header />
            <Outlet />
        </div>
    )
}