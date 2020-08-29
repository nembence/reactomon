import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Image = styled.img`
    max-width: 21rem;
`;

const Title = styled.div`
    position: relative,
    top: 4px,
    float: left,
    margin-right: 10px,
    color: black
`;

const CatchedCard = ({ name, index }) => {
    const url = `https://pokeres.bastionbot.org/images/pokemon/${index}.png`;
    const titleCased =
        name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
    const detailUrl = `/pokemon/${index}`;
    return (
        <div className='ui card' key={index}>
            <div>
                <Link to={detailUrl}>
                    <Image src={url} alt={name} />
                </Link>
            </div>
            <div className='content'>
                <div className='header'>
                    <Title>{titleCased}</Title>
                </div>
            </div>
        </div>
    );
};

export default CatchedCard;
