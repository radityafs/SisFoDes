import React from "react";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function Datepicker({ onChange, value }) {
    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DateTimePicker
                className="form-label w-100"
                value={value}
                onChange={(v) => onChange("schedule", v)}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
