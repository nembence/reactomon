import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PokemonList from "../components/pokemons/PokemonList";
import Header from "../components/header/Header";
import Catched from "../components/catched/Catched";
import TypeList from "../components/types/TypeList";
import Navbar from "../components/navbar/Navbar";
import PokemonDetail from "../components/detailPage/PokemonDetail";
import axios from "axios";

const App = () => {
    const [pokemons, setPokemons] = useState([]);
    const [types, setTypes] = useState([]);
    const [catched, setCatched] = useState([]);
    const [theme, setTheme] = useState(true);

    useEffect(() => {
        changeTheme();
        getPokemons();
        getTypes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getPokemons = async () => {
        const response = await axios({
            method: "GET",
            url: "https://pokeapi.co/api/v2/pokemon"
        });
        setPokemons(response.data.results);
    };

    const changeTheme = () => {
        if (theme) {
            document.body.style = "background: rgb(247,205,70);";
            setTheme(false);
        } else {
            document.body.style = "background: cornflowerblue;";
            setTheme(true);
        }
    };

    const getTypes = async () => {
        const response = await axios.get("https://pokeapi.co/api/v2/type");
        setTypes(response.data.results);
    };

    const handleClick = (name, index) => {
        const pokemon = {
            pokemonName: name,
            pokemonIndex: index
        };
        setCatched(catched.concat(pokemon));
    };

    return (
        <Router>
            <React.Fragment>
                <Header />
                <Navbar changeTheme={changeTheme.bind(this)} />
                <Route
                    exact
                    path='/'
                    render={() => (
                        <PokemonList
                            pokemons={pokemons}
                            handleClick={handleClick.bind(this)}
                        />
                    )}
                />
                <Route
                    path='/pokemons'
                    render={() => (
                        <PokemonList
                            pokemons={pokemons}
                            handleClick={handleClick.bind(this)}
                        />
                    )}
                />
                <Route
                    path='/types'
                    render={() => <TypeList types={types} />}
                />
                <Route
                    path='/catched'
                    render={() => <Catched catched={catched} />}
                />
                <Route path='/pokemon/:id' render={() => <PokemonDetail />} />
            </React.Fragment>
        </Router>
    );
};

export default App;
