import React, { useCallback, useState } from 'react';
import api from '../services/api';
export const GithubContext = React.createContext({
    
})

export const GithubProvider = ({children})=>{

    const [gitHubValues,setGitHubValues] = useState({
        loading: false,
        id: undefined,
        user: {
        login: '',
        name: '',
        html_url: '',
        blog: '',
        company: '',
        location: '',
        followers: 0,
        following: 0,
        public_gists:0,
        public_repos:0
        },
        repositories: [],
        starred: []
    })
    
    const getUser = (username) => {
        setGitHubValues((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
    
        api
          .get(`users/${username}`)
          .then(({ data }) => {
            setGitHubValues((prevState) => ({
              ...prevState,
              hasUser: true,
              user: {
                id: data.id,
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                html_url: data.html_url,
                blog: data.blog,
                company: data.company,
                location: data.location,
                followers: data.followers,
                following: data.following,
                public_gists: data.public_gists,
                public_repos: data.public_repos,
              },
            }));
          })
          .finally(() => {
            setGitHubValues((prevState) => ({
              ...prevState,
              loading: !prevState.loading,
            }));
          });
      };
    
      const getUserRepos = (username) => {
        api.get(`users/${username}/repos`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGitHubValues((prevState) => ({
            ...prevState,
            repositories: data,
          }));
        });
      };
    
      const getUserStarred = (username) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGitHubValues((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      };
    
      const contextValue = {
        gitHubValues,
        getUser: useCallback((username) => getUser(username), []),
        getUserRepos: useCallback((username) => getUserRepos(username), []),
        getUserStarred: useCallback((username) => getUserStarred(username), []),
      };

    return (
        <GithubContext.Provider value={contextValue}>
        {children}
      </GithubContext.Provider>
)
}

export const useGithub = ()=> React.useContext(GithubContext);