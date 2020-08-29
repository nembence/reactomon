import React from "react";
import { Link } from "react-router-dom";
import PokeBall from "./PokeBall";

const PokemonCard = ({ name, index, handleClick }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    const detailUrl = `/pokemon/${index}`;
    return (
        <div className='ui card' key={index}>
            <div>
                <Link to={detailUrl}>
                    <img style={imageStyle} src={url} alt={name} />
                </Link>
            </div>
            <div className='content'>
                <div className='header'>
                    <div style={nextStyle}>{titleCased}</div>
                    <div onClick={() => handleClick(name, index)}>
                        <PokeBall name={name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

const imageStyle = {
    maxWidth: "21rem"
};

const nextStyle = {
    position: "relative",
    top: "10px",
    float: "left",
    marginRight: "10px",
    color: "black"
};

export default PokemonCard;
