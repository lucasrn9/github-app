import React from 'react';
import { GithubContext } from '../providers/githubProvider';

const useGithub = ()=> React.useContext(GithubContext)

export default useGithub;