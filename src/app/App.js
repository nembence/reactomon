import React, { Component } from "react";
import PokemonList from "../components/PokemonList";
import axios from "axios";

class App extends Component {
    state = {
        pokemons: [],
    };

    componentDidMount() {
        this.getPokemons();
    }

    getPokemons = async () => {
        const response = await axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon",
        });
        this.setState({ pokemons: response.data.results });
    };

    render() {
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
            alt="Pokemon logo"
        />;
        return <PokemonList pokemons={this.state.pokemons} />;
    }
}

export default App;
