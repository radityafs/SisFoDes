import React, { useEffect } from "react";
import SwitchTheme from "./SwitchTheme";

export default function Header(props) {
    const { setSidebar } = props;

    return (
        <div className="app-header">
            <nav className="navbar navbar-light navbar-expand-lg">
                <div className="container-fluid">
                    <div className="navbar-nav" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a
                                    className="nav-link hide-sidebar-toggle-button"
                                    onClick={() => setSidebar()}
                                >
                                    <i className="material-icons">first_page</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <SwitchTheme />
                            </li>
                            <li className="nav-item hidden-on-mobile">
                                <a
                                    className="nav-link nav-notifications-toggle"
                                    id="notificationsDropDown"
                                    href="#"
                                    data-bs-toggle="dropdown"
                                >
                                    4
                                </a>
                                <div
                                    className="dropdown-menu dropdown-menu-end notifications-dropdown"
                                    aria-labelledby="notificationsDropDown"
                                >
                                    <h6 className="dropdown-header">
                                        Notifications
                                    </h6>
                                    <div className="notifications-dropdown-list">
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-info text-white">
                                                        <i className="material-icons-outlined">
                                                            campaign
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p className="bold-notifications-text">
                                                        Donec tempus nisi sed
                                                        erat vestibulum, eu
                                                        suscipit ex laoreet
                                                    </p>
                                                    <small>19:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-danger text-white">
                                                        <i className="material-icons-outlined">
                                                            bolt
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p className="bold-notifications-text">
                                                        Quisque ligula dui,
                                                        tincidunt nec pharetra
                                                        eu, fringilla quis
                                                        mauris
                                                    </p>
                                                    <small>18:00</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge bg-success text-white">
                                                        <i className="material-icons-outlined">
                                                            alternate_email
                                                        </i>
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>
                                                        Nulla id libero mattis
                                                        justo euismod congue in
                                                        et metus
                                                    </p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge">
                                                        <img
                                                            src="../../images/avatars/avatar.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>
                                                        Praesent sodales
                                                        lobortis velit ac
                                                        pellentesque
                                                    </p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                        <a href="#">
                                            <div className="notifications-dropdown-item">
                                                <div className="notifications-dropdown-item-image">
                                                    <span className="notifications-badge">
                                                        <img
                                                            src="../../images/avatars/avatar.png"
                                                            alt=""
                                                        />
                                                    </span>
                                                </div>
                                                <div className="notifications-dropdown-item-text">
                                                    <p>
                                                        Praesent lacinia ante
                                                        eget tristique mattis.
                                                        Nam sollicitudin velit
                                                        sit amet auctor porta
                                                    </p>
                                                    <small>yesterday</small>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
