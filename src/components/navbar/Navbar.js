import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div style={navbarStyle}>
            <div className="ui two item menu" id="menu">
                <Link to="/pokemons" className="item">
                    Pokemons
                </Link>
                <Link to="/types" className="item">
                    Types
                </Link>
            </div>
        </div>
    );
};

const navbarStyle = {
    display: "table",
    margin: "0 auto",
    marginBottom: "2rem",
};

export default Navbar;
