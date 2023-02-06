import React, { useEffect } from "react";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";

export default function Index({ appUrl }) {
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
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="page-description page-description-tabbed">
                                        <h1>Dashboard</h1>

                                        <ul
                                            className="nav nav-tabs mb-3"
                                            id="myTab"
                                            role="tablist"
                                        >
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link active"
                                                    id="account-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#account"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="hoaccountme"
                                                    aria-selected="true"
                                                >
                                                    Account
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="security-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#security"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="security"
                                                    aria-selected="false"
                                                >
                                                    Security
                                                </button>
                                            </li>
                                            <li
                                                className="nav-item"
                                                role="presentation"
                                            >
                                                <button
                                                    className="nav-link"
                                                    id="integrations-tab"
                                                    data-bs-toggle="tab"
                                                    data-bs-target="#integrations"
                                                    type="button"
                                                    role="tab"
                                                    aria-controls="integrations"
                                                    aria-selected="false"
                                                >
                                                    Integrations
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="row"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
