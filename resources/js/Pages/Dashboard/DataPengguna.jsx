import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import { GlobalProvider } from "../../Context/GlobalContext";

export default function DataPengguna({ appUrl }) {
    const [sidebarOpen, setSidebarOpen] = React.useState(true);

    const handleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div
            className={`app align-content-stretch d-flex flex-wrap ${
                sidebarOpen ? "" : "sidebar-hidden"
            }`}
        >
            <Sidebar setShow={sidebarOpen} />
            <div className="app-container">
                <Header setSidebar={handleSidebar} />
                <div className="app-content">
                    <div className="content-wrapper">
                        <div className="container-fluid"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
