import React from "react";
import { Link } from "react-router-dom";

const CatchedCard = ({ name, index }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    const detailUrl = `/pokemon/${index}`;
    return (
        <div className="ui card" key={index}>
            <div>
                <Link to={detailUrl}>
                    <img style={imageStyle} src={url} alt={name} />
                </Link>
            </div>
            <div className="content">
                <div className="header">
                    <div style={nextStyle}>{titleCased}</div>
                </div>
            </div>
        </div>
    );
};

const imageStyle = {
    maxWidth: "21rem",
};

const nextStyle = {
    position: "relative",
    top: "2vh",
    float: "left",
    marginRight: "10px",
    color: "black",
};

export default CatchedCard;
