import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Repositorie from '../repositorie/Repositorie';
import useGithub from '../../hooks/githubHook';
import { useState } from 'react/cjs/react.development';

const Repos = () => {
 
 const { gitHubValues,getUserRepos,getUserStarred } = useGithub()
 const [hasUserForSearchRepos,setHasUserForSearchRepos]= useState(false)

 useEffect(() => {
  if (gitHubValues.user.login) {
    getUserRepos(gitHubValues.user.login);
    getUserStarred(gitHubValues.user.login);
  }
  setHasUserForSearchRepos(gitHubValues.repositories);

}, [gitHubValues.user.login]);

  return (
<>
  {hasUserForSearchRepos? (
      <WrapperTabs className="repositories" selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
    <WrapperTabList>
      <WrapperTab>Repositories</WrapperTab>
      <WrapperTab>Starred</WrapperTab>
    </WrapperTabList>

    <WrapperTabPanel>
      {gitHubValues.repositories.map((item)=> (<Repositorie key={item.id} name={item.name} link={item.html_url} fullName={item.full_name}/>))}
      </WrapperTabPanel>
    <WrapperTabPanel>
      {gitHubValues.starred.map((item)=> (<Repositorie key={item.id} name={item.name} link={item.html_url} fullName={item.full_name}/>))}
      </WrapperTabPanel>
  </WrapperTabs>
  )
     : 
    <> </>}
  </>
  )
}
;

export default Repos

const WrapperTabs = styled(Tabs)`
width: 100%;
margin-top: 16px;
background-color: white;
`

const WrapperTabList = styled(TabList)`
list-style-type: none;
width: 168px;
display: flex;
justify-content: space-between;
padding: 4px ;
`

WrapperTabList.tabsRole = 'TabList';

const WrapperTab = styled(Tab)`
border: 1px solid #ccc;
border-radius: 16px;
padding: 16px ;
user-select: none;
cursor: pointer;
margin: 8px;

&.is-selected{
  box-shadow: 1px 1px 4px rgba(0,0,0,0.1);
}
`


const WrapperTabPanel = styled(TabPanel)`
display:none; 
padding: 16px;
border: 1px solid "#ccc";

margin-top: -5px;

&.is-selected{
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
}
`