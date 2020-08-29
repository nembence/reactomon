import React from "react";
import TypeItem from "./TypeItem";
import styled from "styled-components";

const Container = styled.div`
    display: table;
    margin: 0 auto;
    position: relative;
    left: 3rem;
    width: 80rem;
`;

const TypeList = ({ types }) => {
    const renderedTypes = types.map((type, index) => {
        return <TypeItem key={index + 1} name={type.name} />;
    });
    return (
        <Container>
            <div className='ui grid'>{renderedTypes}</div>
        </Container>
    );
};

export default TypeList;
