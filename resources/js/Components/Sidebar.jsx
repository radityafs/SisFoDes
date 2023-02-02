import { Link } from "@inertiajs/inertia-react";
import React from "react";

export default function Sidebar(props) {
    return (
        <div className="app-sidebar">
            <div class="logo hidden-sidebar-logo">
                <Link className="logo-icon" href={"/dashboard"}></Link>
                <div class="sidebar-user-switcher user-activity-online"></div>
                <span className="logo-text">Desa Mlale</span>
            </div>

            <div className="app-menu">
                <ul className="accordion-menu">
                    <li className="active-page">
                        <Link href={"/dashboard"}>
                            <i className="material-icons-two-tone">dashboard</i>
                            Dashboard
                        </Link>
                    </li>

                    <li className="sidebar-title">Layanan Pengguna</li>

                    <li>
                        <Link href={"/data-pengguna"}>
                            <i className="material-icons-two-tone">group</i>
                            Data Pengguna
                        </Link>
                    </li>
                    <li>
                        <a href="file-manager.html">
                            <i className="material-icons-two-tone">event</i>
                            Atur Jadwal
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html">
                            <i className="material-icons-two-tone">
                                how_to_vote
                            </i>
                            Voting
                        </a>
                    </li>

                    <li className="sidebar-title">Sistem Informasi</li>
                    <li>
                        <a href="calendar.html">
                            <i className="material-icons-two-tone">feed</i>
                            Berita
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html">
                            <i className="material-icons-two-tone">report</i>
                            Aduan
                        </a>
                    </li>
                    <li className="sidebar-title">Keuangan</li>
                    <li>
                        <a href="calendar.html">
                            <i className="material-icons-two-tone">menu_book</i>
                            Pendataan
                        </a>
                    </li>
                    <li>
                        <a href="calendar.html">
                            <i className="material-icons-two-tone">summarize</i>
                            Laporan
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
