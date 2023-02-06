import React, { useState } from "react";
import useSwr from "swr";
import useSWRMutation from "swr/mutation";
import { ToastContainer, toast } from "react-toastify";

import { getUsers, putUserStatus } from "../../Utils/Fetcher/Users";
import FormJadwal from "../../Components/Modal/FormJadwal";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Table from "../../Components/Table";
import Modal from "../../Components/Modal";
import TableColumn from "../../Consts/Table";
import useModal from "../../Hooks/useModal";

export default function AturJadwal({ csrf_token }) {
    const [openModal, closeModal, modal] = useModal();

    const [sidebarOpen, setSidebarOpen] = React.useState(true);
    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });
    const [globalFilter, setGlobalFilter] = useState("");

    const handleSidebar = () => setSidebarOpen(!sidebarOpen);

    const {
        data: userData,
        isLoading: userDataLoading,
        mutate: userDataMutate,
    } = useSwr("/api/users", () =>
        getUsers({ query: globalFilter || "", page: pagination.pageIndex })
    );

    const ActionTable = ({ row }) => {
        const { isActive, id } = row.original;

        const { trigger, data } = useSWRMutation(
            `user/${id}`,
            () =>
                putUserStatus(
                    { id },
                    {
                        headers: {
                            "X-CSRF-TOKEN": csrf_token,
                        },
                    }
                ),
            {
                onSuccess: () => {
                    userDataMutate();
                    toast.success("Status pengguna berhasil diubah");
                },
                onError: () => {
                    toast.error("Status pengguna gagal diubah");
                },
            }
        );

        return (
            <div
                style={{
                    display: "flex",
                    flexWrap: "nowrap",
                    gap: "1rem",
                }}
            >
                {isActive ? (
                    <button
                        className="btn btn-danger"
                        onClick={() => trigger()}
                    >
                        Deactivate
                    </button>
                ) : (
                    <button
                        className="btn btn-success"
                        onClick={() => trigger()}
                    >
                        Activate
                    </button>
                )}
            </div>
        );
    };

    return (
        <div
            className={`app align-content-stretch d-flex flex-wrap ${
                sidebarOpen ? "" : "sidebar-hidden"
            }`}
        >
            <ToastContainer />
            <Modal title="Tambah Jadwal" size="modal-md" trigger={modal}>
                <FormJadwal users={userData || []} />
            </Modal>

            <Sidebar setShow={sidebarOpen} />

            <div className="app-container">
                <Header setSidebar={handleSidebar} />
                <div className="app-content">
                    <div className="content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col">
                                    <div className="page-description">
                                        <h1>Atur Jadwal</h1>
                                        <div className="d-flex justify-content-end">
                                            <button
                                                className="btn btn-primary"
                                                onClick={openModal}
                                            >
                                                Tambah Jadwal
                                            </button>
                                        </div>
                                    </div>
                                    <Table
                                        columns={TableColumn.users}
                                        enableColumnFilters={false}
                                        enableColumnActions={false}
                                        enableSorting={false}
                                        enableRowNumbers
                                        data={userData || []}
                                        isLoading={userDataLoading}
                                        onPaginationChange={setPagination}
                                        onGlobalFilterChange={setGlobalFilter}
                                        enableRowActions
                                        onActionClick={({ id, action }) => {
                                            if (action === "edit") {
                                                openModal();
                                            }

                                            if (action === "changeStatus") {
                                            }
                                        }}
                                        renderRowActions={ActionTable}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
