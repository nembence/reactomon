import React from "react";

const PokemonCard = ({ name, index }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    return (
        <div className="ui card" key={index}>
            <div>
                <img style={imageStyle} src={url} alt={name} />
            </div>
            <div className="content">
                <a className="header">{titleCased}</a>
            </div>
        </div>
    );
};

const imageStyle = {
    maxWidth: "21rem",
};

export default PokemonCard;
