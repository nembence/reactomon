import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "../components/pokemons/PokemonList";
import Header from "../components/header/Header";
import Catched from "../components/catched/Catched";
import TypeList from "../components/types/TypeList";
import Navbar from "../components/navbar/Navbar";
import PokemonDetail from "../components/detailPage/PokemonDetail";
import axios from "axios";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            types: [],
            catched: [],
        };
        this.handleClick = this.handleClick.bind(this);
    }

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

    handleClick(name, index) {
        const pokemon = {
            pokemonName: name,
            pokemonIndex: index,
        };
        this.setState({
            catched: this.state.catched.concat(pokemon),
        });
    }

    render() {
        return (
            <Router>
                <React.Fragment>
                    <Header />
                    <Navbar />
                    <Route
                        exact
                        path="/"
                        render={() => (
                            <PokemonList
                                pokemons={this.state.pokemons}
                                handleClick={this.handleClick}
                            />
                        )}
                    />
                    <Route
                        path="/pokemons"
                        render={() => (
                            <PokemonList
                                pokemons={this.state.pokemons}
                                handleClick={this.handleClick}
                            />
                        )}
                    />
                    <Route
                        path="/types"
                        render={() => <TypeList types={this.state.types} />}
                    />
                    <Route
                        path="/catched"
                        render={() => <Catched catched={this.state.catched} />}
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
