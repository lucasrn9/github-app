import React from 'react';
import styled from 'styled-components';

const Nosearch = () => {
    return (  
        <Wrapper>
            <h1>No results for this username</h1>
        </Wrapper>
    );
}
 
export default Nosearch;

const Wrapper = styled.div`

height: 100vh;
display: flex;
justify-content: center;
align-items: center;
h1 {
    font-weight: bold;
    font-size: 32px;
}

`