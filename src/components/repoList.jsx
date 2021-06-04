import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useStateValue} from '../context/state'
import Styled from 'styled-components'

const RepoList = () => {
  const [state, dispatch] = useStateValue();
  const [isLoaded, setIsLoaded] = useState(false)
  const { login } = state.user

  const repos = state.repository

  useEffect(() => {
    axios.get(`https://api.github.com/users/${login}/repos`)
      .then(res =>{
        dispatch({
          type: "REPOSITORY",
          payload: res.data
        })
      })
      setIsLoaded(true)
   },[isLoaded])
    
  return(
    <Container>
    {repos.map((repos) => (
      <List key={repos.id}>
        <ListHeader>
          <Title href={repos.html_url} target="_blank" rel="noreferrer"> {repos.name}</Title>
          <Description>{repos.description}</Description>
          <BottomInfo>
            <Language>{repos.language}</Language>
            <Update>tantas horas atrás</Update>
          </BottomInfo>
        </ListHeader>
      </List>
      )
  )}
    </Container>
)
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);  
`; 

const List = Styled.div`
  display: flex;
  flex-direction: row;
  height: 96px;
  justify-content: left;
  align-items: center;
  padding: 24px 24px;
  margin: 10px 5px 5px 5px;
  font-size: 1.2rem;

  border-bottom: 1px solid #ccc;
  background-color: #fff;
`;

const ListHeader = Styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = Styled.a`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #0366d6;

  &:hover {
    border-bottom: 1px solid #0366d6;
  }
`;

const Description = Styled.span`
  width: 75%;
  font-size: 0.9rem;
  padding-right: 24px;
  margin-bottom: 8px;
  margin-top: 0;
`;

const BottomInfo = Styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
`;

const Language = Styled.span`
`;

const Update = Styled.span`
  margin-left: 20px;
  color: #ccc;
`;
export default RepoList