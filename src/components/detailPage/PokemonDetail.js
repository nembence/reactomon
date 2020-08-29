import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import DetailContainer from "./DetailContainer";

const PokemonDetail = props => {
    const [state, setState] = useState({
        name: "",
        index: 1,
        height: 0,
        weight: 0,
        experience: 0,
        abilities: [],
        types: []
    });

    useEffect(() => {
        const id = props.match.params.id;
        const getPokemonData = async id => {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${id}`
            );
            const data = response.data;
            setState({
                name: data.name,
                index: id,
                height: data.height,
                weight: data.weight,
                experience: data.base_experience,
                abilities: data.abilities,
                types: data.types
            });
        };
        getPokemonData(id);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <React.Fragment>
            <DetailContainer
                name={state.name}
                index={state.index}
                height={state.height}
                weight={state.weight}
                experience={state.experience}
                abilities={state.abilities}
                types={state.types}
            />
        </React.Fragment>
    );
};

export default withRouter(PokemonDetail);
