import React from 'react'
import {useStateValue} from '../context/state'
import Styled from 'styled-components'

const Tabs = () => {
  const [state, dispatch] = useStateValue();
  const repos = state.repository
  return (
    <TabBar>
      <TabItem>Overview</TabItem>
      <TabItem href='/home' >Repository<Count>{repos.length}</Count></TabItem>
      <TabItem>Projects</TabItem>
      <TabItem>Packages</TabItem>
    </TabBar>
  )
}

const TabBar = Styled.div`
  display: flex;
  height: 40px;
  width: 100%;
  line-height: 30px;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid #cccccc4c;
  margin: 0 16px;
`;

const TabItem = Styled.a`
  text-decoration: none;

  padding: 8px 20px;
  font-size: 14px;

  &:hover{
    border-bottom: 2px solid #ccc;
  }

  &:active {
    border-bottom: 2px solid red;
    font-weight: bold;
  }
  `;

  const Count = Styled.small`
    display: inline-block;
    min-width: 20px;
    padding: 0 6px;
    font-size: 12px;
    font-weight: 500;
    line-height: 18px;
    color: #000;
    text-align: center;
    background-color: #cccccc92;
    border: 1px solid transparent;
    border-radius: 2em;
  `;

export default Tabs