import React from "react";
import MaterialReactTable from "material-react-table";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Table({
    columns,
    onPaginationChange,
    onGlobalFilterChange,
    renderRowActions,
    isLoading,
    data,
    onActionClick,
    ...props
}) {
    const darkTheme = createTheme({
        palette: {
            mode: "dark",
            background: {
                default: "#181821",
            },
            primary: {
                main: "#9a9cab",
            },
        },
    });

    const lightTheme = createTheme({
        palette: {
            mode: "light",
        },
    });

    const theme =
        localStorage.getItem("theme") === "dark" ? darkTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <MaterialReactTable
                {...props}
                manualPagination
                onPaginationChange={onPaginationChange}
                onGlobalFilterChange={onGlobalFilterChange}
                state={{
                    isLoading,
                }}
                columns={columns}
                data={data?.data || []}
                positionActionsColumn="last"
                renderRowActions={renderRowActions}
            />
        </ThemeProvider>
    );
}
