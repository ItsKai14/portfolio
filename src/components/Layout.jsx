import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./styles/Layout.css";

function Layout () {
    return(
        <>
            <div className="google-sans-code-container">
                <Header />
                <div className="container mt-4">
                    <div>
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout;