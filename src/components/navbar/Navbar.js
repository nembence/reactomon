import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeChanger from "../background/ThemeChanger";

const NavbarContainer = styled.div`
    display: table;
    margin: 0 auto;
    margin-bottom: 2rem;
`;

const Navbar = ({ changeTheme }) => {
    return (
        <NavbarContainer>
            <div className='ui three item menu' id='menu'>
                <Link to='/pokemons' className='item'>
                    Pokemons
                </Link>
                <Link to='/types' className='item'>
                    Types
                </Link>
                <Link to='/catched' className='item'>
                    Catched
                </Link>
            </div>
            <ThemeChanger changeTheme={changeTheme} />
        </NavbarContainer>
    );
};

export default Navbar;
