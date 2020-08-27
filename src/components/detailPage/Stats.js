import React from "react";

const Stats = ({ height, weight, experience, abilities, types }) => {
    const renderedAbilities = abilities.map((ability) => {
        return (
            <div className="six wide column">
                <div style={pokeBallStyle}>
                    <h7 style={typeStyle}>{ability.ability.name}</h7>
                </div>
            </div>
        );
    });
    const renderedTypes = types.map((type) => {
        return (
            <div className="six wide column">
                <div style={pokeBallStyle}>
                    <h7 style={typeStyle}>{type.type.name}</h7>
                </div>
            </div>
        );
    });
    return (
        <div style={containerStyle} className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="header">Height: {height}</div>
                    <div className="header">Weight: {weight}</div>
                    <div className="header">Experience: {experience}</div>
                    <div style={titleStyle} className="header">
                        Abilities:{" "}
                    </div>
                    <div className="ui grid">{renderedAbilities}</div>
                    <div style={titleStyle} className="header">
                        Types:
                    </div>
                    <div className="ui grid">{renderedTypes}</div>
                </div>
            </div>
        </div>
    );
};

const containerStyle = {
    marginLeft: "10px",
};

const pokeBallStyle = {
    width: "6vw",
    height: "6vw",
    border: "2px solid black",
    background:
        "linear-gradient(white, white 49%, black 49%, black 51%, red 51% )",
    borderRadius: "50%",
};

const typeStyle = {
    display: "table",
    position: "relative",
    top: "1vw",
    margin: "0 auto",
    fontWeight: "bold",
};

const titleStyle = {
    marginBottom: "1rem",
};

export default Stats;
