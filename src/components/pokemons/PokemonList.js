import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, handleClick }) => {
    const click = (name, index) => {
        handleClick(name, index);
    };

    const renderedPokemons = pokemons.map((pokemon, index) => {
        return (
            <PokemonCard
                key={index + 1}
                name={pokemon.name}
                index={index + 1}
                handleClick={click}
            />
        );
    });

    return <div className='ui centered cards'>{renderedPokemons}</div>;
};

export default PokemonList;
