import React from 'react'
import { 
  GitHub, 
  NotificationsNoneOutlined,
  Add,
  AccountCircleIcon
} from '@material-ui/icons';
import {useStateValue} from '../context/state'
import Styled from 'styled-components'

const Navbar = () => {
  const [state, dispatch] = useStateValue();
  const {avatar_url} = state.user

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
          <MenuAvatar src={avatar_url}/>
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

const MenuContainer = Styled.nav`
  display: flex;
  flex-direction: row;
  padding: 16px 32px;
`;

const MenuUser = Styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 16px;
`;

const MenuItem = Styled.a`
  display: flex;
  align-items:center;
  color: #ccc;
  text-decoration: none;
  padding-right: 16px;
  font-weight: bold;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 32px;
    margin-right: 5px;
  }
`;

const MenuIcon = Styled.span`
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

const MenuInput = Styled.input`
  background-color: #1b1f23;
  border: 1px solid #cccccc4c;
  border-radius: 5px;
  min-height: 28px;
  width: 100%;
  line-height: 20px;
  margin-right: 16px;
`;

const MenuAvatar = Styled.img`
  display: flex;
  align-items:center;
  width: 25px;
  height:25px;
  border-radius: 50%;

  transform: translateY(17px);

`;


export default Navbar