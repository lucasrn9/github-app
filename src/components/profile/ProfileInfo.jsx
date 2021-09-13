import React from 'react';
import styled from 'styled-components';
import useGithub from '../../hooks/githubHook';



const Profileinfo = ()=>{
    
    const { gitHubValues } = useGithub();
    
    return(
    <Wrapper className="ProfileInfo">
    
    <PersonalInfo className="PersonalInfo">
    <NameSurname>{gitHubValues.user.name}</NameSurname>
    <Iten>UserName: <ItenValue>{gitHubValues.user.login}</ItenValue></Iten>
    <Iten>Company: <ItenValue>{gitHubValues.user.company}</ItenValue></Iten>
    <Iten>Location: <ItenValue>{gitHubValues.user.location}</ItenValue></Iten>
    <Iten>Blog: <ItenValue> <a href={gitHubValues.user.blog} target="_blank"> {gitHubValues.user.blog}</a></ItenValue></Iten>
    </PersonalInfo>

    <GitHubInfo className="GitHubProfileInfo">
    <Iten>
        Followers
        <span>{gitHubValues.user.followers}</span>
    </Iten>

    <Iten>
        Followings
        <span>{gitHubValues.user.following}</span>
    </Iten>

    <Iten>
        Gists
        <span>{gitHubValues.user.public_gists}</span>
        </Iten>

    <Iten>
        Repos
        <span>{gitHubValues.user.public_repos}</span>
        </Iten>
    </GitHubInfo>

    </Wrapper>
    )
}

export default Profileinfo;

const Wrapper = styled.div`
width: 40vw;
display: flex;
flex-direction: column;
justify-content: space-evenly;
margin-left: 25px;
`

const PersonalInfo = styled.div`
display: flex;
flex-direction: column;
`

const GitHubInfo = styled.div`
margin-top: 8px;
display: flex;
flex-direction: row;
justify-content: space-between;

span{
    display: block;
    text-align: center;
    margin-top: 4px;
}

`
const Iten = styled.p`
margin-bottom: 5px;
font-weight: bold;
`

const ItenValue = styled.span`
display: inline;
font-weight: normal;
a{
color: #3182ce;
}
`

const NameSurname = styled.p`
font-weight: bolder;
font-size: 24px;
margin-bottom: 10px;
`