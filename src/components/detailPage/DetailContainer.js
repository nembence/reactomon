import React from "react";
import PokemonCard from "../pokemons/PokemonCard";
import Stats from "./Stats";

const DetailContainer = ({
    name,
    index,
    height,
    weight,
    experience,
    abilities,
    types,
}) => {
    return (
        <div style={detailStyle}>
            <div style={flexStyle}>
                <PokemonCard name={name} index={index} />
                <Stats
                    height={height}
                    weight={weight}
                    experience={experience}
                    abilities={abilities}
                    types={types}
                />
            </div>
        </div>
    );
};

const detailStyle = {
    display: "table",
    margin: "0 auto",
};

const flexStyle = {
    display: "flex",
    flexDirection: "row",
    margin: "5px",
};

export default DetailContainer;
