import React from 'react';

const ButtonChangeRepos = ({children,onClick})=>{
    return(
        <button onClick={onClick}>
        {children}
        </button>
    )
}

export default ButtonChangeRepos;