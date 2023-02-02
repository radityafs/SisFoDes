import "../css/app.css";
import "../css/custom.css";
import "../css/main.css";
import "../css/perfectscroll/main.css";
import "../css/perfectscroll/pace.css";
import "./bootstrap";

import "./jquery.min";

import "./main";
import "./custom";
import "./pace.min";

if (localStorage.getItem("theme") === "dark") {
    import("../css/darktheme.css");
}

import React from "react";
import { render } from "react-dom";
import { createInertiaApp } from "@inertiajs/inertia-react";
import { InertiaProgress } from "@inertiajs/progress";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { GlobalProvider } from "./Context/GlobalContext";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        return render(<App {...props} />, el);
    },
});

InertiaProgress.init({ color: "#4B5563" });
