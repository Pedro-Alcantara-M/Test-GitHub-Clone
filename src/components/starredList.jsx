import React from 'react';
import Styled from 'styled-components';
import Moment from 'react-moment';
import 'moment-timezone';
import { useStateValue } from '../context/state';
import StarIcon from '@material-ui/icons/Star';

const StarredList = () => {
  const [state, dispatch] = useStateValue();
  const repos = state.starred;

  return (
    <Container>
    {repos.map((repos) => (
      <List key={repos.id}>
        <ListHeader>
          <Title href={repos.html_url} target="_blank" rel="noreferrer"> {repos.name}</Title>
          <Description>{repos.description}</Description>
          <BottomInfo>
            <Language>{repos.language}</Language>
            <Update>Updated: <Moment fromNow>{repos.updated_at}</Moment></Update>
          </BottomInfo>
        </ListHeader>
          <StarButton>
            <StarIcon/>
            Unstar
          </StarButton>
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
  height: calc(100vh - 350px);  
  
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
  

  border-bottom: 1px solid #cccccc58;
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
  margin-bottom: 10px;

  &:hover{
    text-decoration-line: underline; 
  }
 
`;

const Description = Styled.span`
  width: 75%;
  font-size: 0.9rem;
  padding-right: 24px;
  margin-bottom: 8px;
  
`;

const BottomInfo = Styled.div`
  display: flex;
  flex-direction: row;
  font-size: 13px;
  margin-bottom: 15px;
`;

const Language = Styled.span`
  color: #000000a6;
`;

const Update = Styled.span`
  margin-left: 20px;
  color: #000000a6;
`;

const StarButton = Styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 16px;
  margin-left: auto;
  font-size: 0.7rem;
  font-weight: 500;
  line-height: 20px;

  > svg{
    font-size: 1.2rem;
  }
`;
export default StarredList