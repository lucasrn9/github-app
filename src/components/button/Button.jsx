import React from 'react';
import styled from 'styled-components'
const Button = ({ children, onClick }) => {
    return ( 
        <Sbutton type="submit" onClick={onClick}>{children}</Sbutton>
     );
}
 
export default Button;

const Sbutton = styled.button`
background-color: #225ed8;
padding: 8px 16px;
margin: 0 16px;
border-radius: 8px;
border: none;
font-weight: bold;
font-size: 16px;
cursor: pointer;
color: white;

&:hover{
background-color: #2c5282;
box-shadow: 3px 2px 10px rgba(0,0,0,0.2);
}
`