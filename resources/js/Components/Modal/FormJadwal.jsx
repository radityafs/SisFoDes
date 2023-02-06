import React from "react";
import { useForm } from "@inertiajs/inertia-react";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import Datepicker from "../Datepicker";
import {
    Checkbox,
    TextField as TextInput,
    TextareaAutosize,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DropzoneArea } from "material-ui-dropzone";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { useTheme, selectTheme, dropzoneTheme } from "../../Consts/Theme";
import { typeJadwal } from "../../Consts/Select";

import moment from "moment";
import TextArea from "../TextArea";

export default function createJadwal({ users }) {
    const theme = useTheme();

    const userOptions = users?.data?.map((user) => {
        return { value: user.id, label: user.name };
    });

    const { data, setData, post } = useForm({
        isAllUser: false,
        users: [],
        category: "",
        schedule: moment(),
        type: "",
    });

    const handleChange = (target, value) => {
        setData({
            ...data,
            [target]: value,
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <form>
                <div className="mb-3">
                    <label className="form-label">Judul</label>
                    <TextInput className="w-100" size="small" />
                </div>

                <div className="mb-3">
                    <label className="form-label">Deskripsi</label>
                    <TextArea className="w-100" />
                </div>

                <div className="mb-2">
                    <label className="form-label">Nama Warga</label>
                    {!data.isAllUser && (
                        <Select
                            options={userOptions}
                            clearOption={() => console.log("clear")}
                            isMulti
                            onChange={(selected) =>
                                handleChange("users", selected)
                            }
                            value={data.users}
                            styles={selectTheme}
                        />
                    )}
                </div>

                <div className="mb-2">
                    <Checkbox
                        checked={data.isAllUser}
                        onChange={(e) => {
                            handleChange("isAllUser", !data.isAllUser);
                        }}
                    />
                    <label className="form-label">Semua Warga</label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Kategori</label>
                    <CreatableSelect
                        placeholder="Pilih Kategori atau Buat baru"
                        styles={selectTheme}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Jadwal</label>
                    <Datepicker onChange={handleChange} value={data.schedule} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tipe Kegiatan</label>
                    <Select options={typeJadwal} styles={selectTheme} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Lampiran</label>
                    <MuiThemeProvider theme={theme}>
                        <DropzoneArea styles={dropzoneTheme} maxFile={5} />
                    </MuiThemeProvider>
                    ;
                </div>

                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary">Tambah</button>
                </div>
            </form>
        </ThemeProvider>
    );
}
