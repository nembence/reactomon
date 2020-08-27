import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";
import DetailContainer from "./DetailContainer";

class PokemonDetail extends Component {
    state = {
        name: "",
        index: 0,
        height: 0,
        weight: 0,
        experience: 0,
        abilities: [],
        types: [],
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ index: id });
        this.getPokemonData(id);
    }

    getPokemonData = async (id) => {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${id}`
        );
        const data = response.data;
        this.setState({
            name: data.name,
            height: data.height,
            weight: data.weight,
            experience: data.base_experience,
            abilities: data.abilities,
            types: data.types,
        });
    };

    render() {
        return (
            <React.Fragment>
                <DetailContainer
                    name={this.state.name}
                    index={this.state.index}
                    height={this.state.height}
                    weight={this.state.weight}
                    experience={this.state.experience}
                    abilities={this.state.abilities}
                    types={this.state.types}
                />
            </React.Fragment>
        );
    }
}

export default withRouter(PokemonDetail);
