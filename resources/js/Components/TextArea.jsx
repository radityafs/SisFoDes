import { styled } from "@mui/material/styles";
import { TextareaAutosize } from "@mui/material";

const TextAreaStyle = styled(TextareaAutosize)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#181821" : "#fff",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
    minHeight: "50px",
    borderRadius: "5px",
    padding: "10px",

    "&:focus": {
        outline:
            theme.palette.mode === "dark"
                ? "1px solid #cacaca"
                : "1px solid skyblue",
    },
}));

export default function TextArea(props) {
    return <TextAreaStyle {...props} />;
}
