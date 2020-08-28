import React, { Component } from "react";
import PokemonCard from "./PokemonCard";

class PokemonList extends Component {
    handleClick = (name, index) => {
        this.props.handleClick(name, index);
    };

    render() {
        const renderedPokemons = this.props.pokemons.map((pokemon, index) => {
            return (
                <PokemonCard
                    name={pokemon.name}
                    index={index + 1}
                    handleClick={this.handleClick}
                />
            );
        });
        return <div className="ui centered cards">{renderedPokemons}</div>;
    }
}

export default PokemonList;
