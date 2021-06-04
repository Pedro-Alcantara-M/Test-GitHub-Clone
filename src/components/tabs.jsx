import React from 'react'
import Styled from 'styled-components'

const Tabs = () => {


  return (
    <TabBar>
      <TabItem>Overview</TabItem>
      <TabItem>Repository</TabItem>
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

export default Tabs