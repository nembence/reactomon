import React from "react";
import Stats from "./Stats";
import styled from "styled-components";
import CatchedCard from "../catched/CatchedCard";

const Container = styled.div`
    display: table;
    margin: 0 auto;
`;

const StatContainer = styled.div`
    display: flex;
    flexdirection: row;
    margin: 5px;
`;

const DetailContainer = ({
    name,
    index,
    height,
    weight,
    experience,
    abilities,
    types
}) => {
    return (
        <Container>
            <StatContainer>
                <CatchedCard name={name} index={index} />
                <Stats
                    height={height}
                    weight={weight}
                    experience={experience}
                    abilities={abilities}
                    types={types}
                />
            </StatContainer>
        </Container>
    );
};

export default DetailContainer;
