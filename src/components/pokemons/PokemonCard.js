import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, index }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    const detailUrl = `/pokemon/${index}`;
    return (
        <div className="ui card" key={index}>
            <div>
                <img style={imageStyle} src={url} alt={name} />
            </div>
            <div className="content">
                <Link to={detailUrl} className="header">
                    {titleCased}
                </Link>
            </div>
        </div>
    );
};

const imageStyle = {
    maxWidth: "21rem",
};

export default PokemonCard;
