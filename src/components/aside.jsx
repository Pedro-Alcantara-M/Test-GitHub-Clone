import React  from 'react'
import {useStateValue} from '../context/state'
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Aside = (props) => {
  const [state, dispatch] = useStateValue();
  const history = useHistory()
  const repos = state.starred

  const logout = () => {
    localStorage.removeItem('login')
    history.push("/")
  }

  return (
    <Container>
      <div>
        <Image>
          <img src={props.avatar} alt='Avatar do usuário'/>
        </Image>
        <Title>{props.name}</Title>
        <SubTitle>{props.login}</SubTitle>
      </div>
      <Button>Edit profile</Button>
      <Bottom>
        <Followers>{props.followers} followers <SmallPoint>.</SmallPoint></Followers>
        <Following>{props.following} following <SmallPoint>.</SmallPoint></Following>
        <Starred href='/home/starredlist'><StarOutlineIcon/>{repos.length}</Starred>
        <Button onClick={logout}>Logout</Button>
      </Bottom>

    </Container>  
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: right;
  height: calc(100vh - 62px);
  width: 100%;
  max-width: 280px;
  margin-top: 10px;
`;

const Header = Styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

const Image = Styled.div`

  img{
    width: 90%;
    border-radius: 50%;
    margin-bottom: 15px;
  }
`;

const Title = Styled.span`
  font-size: 26px;
  line-height: 1.25rem;
  font-weight: 600; 
  margin-bottom: 10px;
`;

const SubTitle = Styled.span`
  font-size: 20px;
  font-style: normal;
  font-weight: 300;
  line-height: 24px;
`;

const Button = Styled.button`
  width: 90%;
  border: 1px solid #cccccc73;
  border-radius: 5px;
  padding: 5px 16px;
  margin: 10px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;

  
`;

const Bottom = Styled.div`
  margin-right: 5px;

  
  }
`;

const Followers = Styled.a`
  text-decoration: none;
  background-color: transparent;

  &:hover{
    color: #0366d6;
  }

  small {
    transform: translateY(20px);
  }

`;

const Following = Styled.a`
  text-decoration: none;
  background-color: transparent;

  &:hover{
    color: #0366d6;
  }
`;

const Starred = Styled.a`

&:hover{
    color: #0366d6;
  }
  
  > svg{
    margin-left: 5px;
    transform: translateY(5px);
  }
`;

const SmallPoint = Styled.small`
  margin: 0 3px;
`;



export default Aside