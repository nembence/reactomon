import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    const renderedPokemons = pokemons.map((pokemon, index) => {
        return <PokemonCard name={pokemon.name} index={index + 1} />;
    });
    return <div className="ui centered cards">{renderedPokemons}</div>;
};

export default PokemonList;
