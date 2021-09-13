import React from 'react';
import styled from 'styled-components';
import useGithub from '../../hooks/githubHook';
import Profileinfo from './ProfileInfo';
const Profile = ()=>{
    
    const {gitHubValues} = useGithub()
    

    return(
        <Wrapper className="Profile">
            <Picture src={gitHubValues.user.avatar} alt="Profile Picture" />
            <Profileinfo />
        </Wrapper>
    )
}

export default Profile

const Picture = styled.img`
width:150px;
height:150px;
border-radius:300px;
`
const Wrapper = styled.div`
display: flex;
margin-top:20px;
margin-bottom: 16px;
`