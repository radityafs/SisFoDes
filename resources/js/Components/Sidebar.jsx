import { Link } from "@inertiajs/inertia-react";
import React, { useEffect } from "react";

export default function Sidebar(props) {
    const isActive = (route) => {
        return window.location.pathname === route ? "active-page" : "";
    };

    return (
        <div className="app-sidebar">
            <div className="logo hidden-sidebar-logo">
                <Link className="logo-icon" href={"/dashboard"}></Link>
                <div className="sidebar-user-switcher user-activity-online"></div>
                <span className="logo-text">Desa Mlale</span>
            </div>

            <div className="app-menu">
                <ul className="accordion-menu">
                    <li className={isActive("/dashboard")}>
                        <Link href={"/dashboard"}>
                            <i className="material-icons-two-tone">dashboard</i>
                            Dashboard
                        </Link>
                    </li>

                    <li className="sidebar-title">Layanan Pengguna</li>

                    <li className={isActive("/data-pengguna")}>
                        <Link href={"/data-pengguna"}>
                            <i className="material-icons-two-tone">group</i>
                            Data Pengguna
                        </Link>
                    </li>
                    <li className={isActive("/atur-jadwal")}>
                        <Link href={"/atur-jadwal"}>
                            <i className="material-icons-two-tone">event</i>
                            Atur Jadwal
                        </Link>
                    </li>
                    <li className={isActive("/voting")}>
                        <Link href={"/voting"}>
                            <i className="material-icons-two-tone">
                                how_to_vote
                            </i>
                            Voting
                        </Link>
                    </li>

                    <li className="sidebar-title">Sistem Informasi</li>
                    <li className={isActive("/berita")}>
                        <Link href={"/berita"}>
                            <i className="material-icons-two-tone">feed</i>
                            Berita
                        </Link>
                    </li>
                    <li className={isActive("/aduan")}>
                        <Link href={"/aduan"}>
                            <i className="material-icons-two-tone">report</i>
                            Aduan
                        </Link>
                    </li>
                    <li className="sidebar-title">Keuangan</li>
                    <li className={isActive("/pendataan")}>
                        <Link href={"/pendataan"}>
                            <i className="material-icons-two-tone">menu_book</i>
                            Pendataan
                        </Link>
                    </li>
                    <li className={isActive("/laporan")}>
                        <Link href={"/laporan"}>
                            <i className="material-icons-two-tone">summarize</i>
                            Laporan
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
