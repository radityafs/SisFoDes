import React, { useContext } from "react";

const GlobalContext = React.createContext();

function GlobalProvider({ children }) {
    const [toggle, setToggle] = React.useState(false);

    const contextValue = {
        toggle,
        setToggle,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
}

function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };
