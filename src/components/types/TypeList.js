import React from "react";
import TypeItem from "./TypeItem";

const TypeList = ({ types }) => {
    const renderedTypes = types.map((type) => {
        return <TypeItem name={type.name} />;
    });
    return (
        <div style={containerStyle}>
            <div className="ui grid">{renderedTypes}</div>
        </div>
    );
};

const containerStyle = {
    display: "table",
    margin: "0 auto",
    position: "relative",
    left: "3rem",
    width: "80rem",
};

export default TypeList;
