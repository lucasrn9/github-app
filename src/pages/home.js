import React, { useState } from 'react';
import styled from 'styled-components';
import { Search,Profile,Repos,Nosearch } from '../components/index'
import { useGithub } from '../providers/githubProvider';


function Home() {

  const { getUser } = useGithub()
  const { gitHubValues } = useGithub()
  const [searchValue,setSearchValue] = useState('')
   

    return (
      <Layout>
        <Search onChange={getUser} value={searchValue}/>
        {gitHubValues.user.login===''? <Nosearch />:
        <>
        <Profile />
        <Repos />
        </>
        }
        
      </Layout>
    );
  }
  
  export default Home;

  const Layout = styled.div`
 width: 97vw;
 height: 100vh;
 margin: 15px;
 display: flex;
 flex-direction: column;
 `