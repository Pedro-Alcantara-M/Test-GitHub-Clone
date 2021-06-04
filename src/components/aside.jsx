import React from 'react'
import Styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';

const Aside = (props) => {

  return (
    <Container>
      <Image>
        <img src={props.avatar} alt='Avatar do usuário'/>
      </Image>
      <Title>{props.name}</Title>
      <SubTitle>{props.login}</SubTitle>
      <Button>Edit profile</Button>
      <Bottom>
        <Followers>{props.followers} followers </Followers>
        <Following>{props.following} following</Following>
        <Starred><StarOutlineIcon/>{props.repoStarred} </Starred>
      </Bottom>

    </Container>  
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: calc(100vh - 62);
  width: 15%;
  margin-top: 32px;
`;

const Image = Styled.div`

  img{
    width: 100%;
    border-radius: 50%;
    margin-bottom: 15px;
  }

  /* .emoji{
    background-color: #fff;
    border: 1px solid #cccccc58;
    padding: 10px;
    position: absolute;
    display: flex;
    right: 0;
    top: 180px;
    width: 40px;
   
  } */
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
  width: 100%;
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
`;

const Followers = Styled.a`
  text-decoration: none;
  background-color: transparent;

`;

const Following = Styled.a`
  text-decoration: none;
  background-color: transparent;
`;

const Starred = Styled.a`
  > svg{
    margin-left: 5px;
    transform: translateY(5px);
  }
`;

export default Aside