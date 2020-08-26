import React from "react";

const TypeItem = ({ name }) => {
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    return (
        <div className="three wide column">
            <div style={pokeBallStyle}>
                <h2 style={typeStyle}>{titleCased}</h2>
            </div>
        </div>
    );
};

const pokeBallStyle = {
    width: "10vw",
    height: "10vw",
    border: "3px solid black",
    background:
        "linear-gradient(white, white 49%, black 49%, black 51%, red 51% )",
    borderRadius: "50%",
};

const typeStyle = {
    display: "table",
    position: "relative",
    top: "1.5vw",
    margin: "0 auto",
};

export default TypeItem;
