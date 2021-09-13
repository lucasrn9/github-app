import React from 'react';
import styled from 'styled-components';

const Repositorie = ({name,fullName,link})=>{
    return (
        <Box>
            <Title>{name}</Title>
            <FullName>Full name:</FullName>
            <Link href={link} target="_blank" rel="noreferrer">
            {fullName}
            </Link>
        </Box>
    )
}

export default Repositorie;

const Box = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100px;
margin-bottom: 32px;
margin-right: 32px;
border: 1px solid #ccc;
border-radius: 8px;
padding: 16px 16px;
`

const Title = styled.h2`
font-weight: bold;
`

const FullName = styled.h4`
font-weight: 300;
font-size: 14px;
margin: 4px 0;
color: #2d3748
`

const Link = styled.a`
color: #3182ce;
`