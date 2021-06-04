import React from 'react'
import { 
  GitHub, 
  NotificationsNoneOutlined,
  Add
} from '@material-ui/icons';
import Styled from 'styled-components'

const Navbar = () => {

  return (
    <Container>
      <MenuContainer>
        <MenuItem><GitHub/></MenuItem>
        <MenuInput type='search' placeholder='Search or jump to...'/>
        <MenuItem>Pull requests</MenuItem>
        <MenuItem>Issues</MenuItem>
        <MenuItem>Marketplace</MenuItem>
        <MenuItem>Explore</MenuItem>
      </MenuContainer>
        <MenuUser>
          <MenuIcon><NotificationsNoneOutlined/></MenuIcon>
          <MenuIcon><Add/></MenuIcon>
          <MenuItem>Avatar_user</MenuItem>
        </MenuUser>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: space-between;
  height: 62px;
  width: 100%;
  background-color:#1b1f23;
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
  color: #ccc;
  text-decoration: none;
  padding-right: 16px;
  font-weight: bold;
  display: flex;
  align-items:center;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 32px;
    margin-right: 5px;
  }
`;

export const MenuIcon = Styled.span`
  display: flex;
  align-items: center;
  margin-right: 10px;
  color: #fff;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
  }
`;

export const MenuInput = Styled.input`
  background-color: #1b1f23;
  border: 1px solid #cccccc4c;
  border-radius: 5px;
  min-height: 28px;
  width: 100%;
  line-height: 20px;
  margin-right: 16px;

`;


export default Navbar