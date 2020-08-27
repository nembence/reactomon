import React from "react";
import "./PokemonCard.css";

const PokemonCard = ({ name, index }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    return (
        <div className="ui card">
            <div className="image">
                <img src={url} alt={name} />
            </div>
            <div className="content">
                <a className="header">{name}</a>
            </div>
        </div>
    );
};

export default PokemonCard;
