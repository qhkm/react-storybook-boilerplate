import React from "react";
import { string, func } from "prop-types";

export const Button = ({ bg, onClick, children }) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: bg }}>
            {children}
        </button>
    );
};

Button.propTypes = {
    bg: string,
    onClick: func,
    children: string
};
