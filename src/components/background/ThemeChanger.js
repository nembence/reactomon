import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: table;
    margin: 0 auto;
`;

const ThemeChanger = ({ changeTheme }) => {
    return (
        <Container>
            <div className='ui toggle checkbox' onClick={changeTheme}>
                <input type='checkbox' name='public' />
                <label></label>
            </div>
        </Container>
    );
};

export default ThemeChanger;
