import React from 'react'
import Styled from 'styled-components'
import { GitHub } from '@material-ui/icons';

const Footer = () => {

  return(
    <Container>
      <MenuContainer>
        <MenuItem>Terms</MenuItem>
        <MenuItem>Privacy</MenuItem>
        <MenuItem>Security</MenuItem>
        <MenuItem>Status</MenuItem>
        <MenuItem>Docs</MenuItem>
        <MenuIcon><GitHub/></MenuIcon>
        <MenuItem>Contact GitHub</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>API</MenuItem>
        <MenuItem>Training</MenuItem>
        <MenuItem>About</MenuItem>
      </MenuContainer>
    </Container>

  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-top: 1px solid #cccccc58;
  height: 62px;
  width: 100%;
  padding: 40px 0 8px 0;
  margin-top: 40px;
`;

export const MenuContainer = Styled.nav`
  display: flex;
  flex-direction: row;
  padding: 16px 32px;
`;

export const MenuUser = Styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
`;

export const MenuItem = Styled.a`
  display: flex;
  align-items:center;
  text-decoration: none;
  margin: 1rem;
  padding-right: 16px;
  font-weight: 0.5rem;
  color: #0366d6;

  transition: opacity 0.3s;

  &:hover {
    border-bottom: 1px solid #0366d6;
  }

  > svg {
    font-size: 32px;
    margin-right: 5px;
  }
`;

export const MenuIcon = Styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 6.5rem;
  color: #ccccccba;
  transition: opacity 0.3s;

  &:hover {
    color: #8b8b8b
  }

  > svg {
    font-size: 24px;
  }
`;

export default Footer