import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "../components/pokemons/PokemonList";
import Header from "../components/header/Header";
import TypeList from "../components/types/TypeList";
import Navbar from "../components/navbar/Navbar";
import PokemonDetail from "../components/detailPage/PokemonDetail";
import axios from "axios";
import "./App.css";

class App extends Component {
    state = {
        pokemons: [],
        types: [],
    };

    componentDidMount() {
        this.getPokemons();
        this.getTypes();
    }

    getPokemons = async () => {
        const response = await axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon",
        });
        this.setState({ pokemons: response.data.results });
    };

    getTypes = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        this.setState({ types: response.data.results });
    };

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Navbar />
                    <Route
                        path="/pokemons"
                        render={() => (
                            <PokemonList pokemons={this.state.pokemons} />
                        )}
                    />
                    <Route
                        path="/types"
                        render={() => <TypeList types={this.state.types} />}
                    />
                    <Route
                        path="/pokemon/:id"
                        render={() => <PokemonDetail />}
                    />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
