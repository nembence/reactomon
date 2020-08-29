import React from "react";
import CatchedCard from "./CatchedCard";

const Catched = ({ catched }) => {
    const renderedPokemons = catched.map((pokemon, index) => {
        return (
            <CatchedCard
                key={index}
                name={pokemon.pokemonName}
                index={pokemon.pokemonIndex}
            />
        );
    });
    return <div className='ui centered cards'>{renderedPokemons}</div>;
};

export default Catched;
