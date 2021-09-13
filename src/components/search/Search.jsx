import React, { useState } from 'react';
import useGithub from '../../hooks/githubHook';
import styled from 'styled-components';
import Button from '../button/Button';

const Search = ()=>{
    
    const { getUser } = useGithub();
    const [usernameForSearch, setUsernameForSearch] = useState();
  
    const submitGetUser = () => {
      if (!usernameForSearch) return;
      return getUser(usernameForSearch);
    };

    return (
        <Wrapper className="search">
        <Input type="text" name="searchBar" id="searchBar" placeholder="Search for a github profile" onChange={(event) => setUsernameForSearch(event.target.value)}/>
        <Button onClick={submitGetUser}>Buscar</Button>
        </Wrapper>
    )
}

export default Search;

const Wrapper = styled.div`
display: flex;
width: 100%;
justify-content: center;
padding: 4px;
margin-bottom: 24px;
`

const Input = styled.input`
border: 1px solid #ccc;
border-radius: 8px;
width: 50%;
height: 36px;
padding 8px;
font-weight: 200;
font-size: 16px;
text-align: center;
`