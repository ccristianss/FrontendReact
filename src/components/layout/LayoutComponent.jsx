import React from "react";

function LayoutComponent({ children }) {
    return (
        <div className="flex flex-col justify-center">
            {children}
        </div>
    );
};

export default LayoutComponent;