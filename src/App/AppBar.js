import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from "./AppProvider";

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display:grid;
  margin-bottom: 40px;
  grid-template-columns:180px auto 100px 100px
`;

const ControlButtonElem = styled.div`
  cursor:pointer;
  ${props => props.active && css`
    text-shadow: 0 0 60px #03ff03;
  `};
`;

function ControlButton({name, active}) {
  return (
    <AppContext.Consumer>
      {({page, setPage}) => (
        <ControlButtonElem
          active={page === name}
          onClick={()=>setPage(name)}
        >
          {toProperCase(name)}
        </ControlButtonElem>
        )}
    </AppContext.Consumer>
  )
}

function toProperCase(lower) {
  return lower.charAt(0).toUpperCase() + lower.substring(1);
}

export default function () {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div/>
      <ControlButton name={'dashboard'} active/>
      <ControlButton name={'settings'}/>
    </Bar>);
}
