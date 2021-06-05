import React, { useEffect, useState } from 'react';
import { useStateValue } from '../context/state';
import { useHistory } from 'react-router-dom';
import Styled from 'styled-components';
import Aside from '../components/aside';
import Tabs from '../components/tabs';
import SearchBar from '../components/searchBar';
import List from '../components/list';

import { userlogin } from '../helper/userLogin';
import loadUser from '../helper/userData';

const Home = () => {
  const [state, dispatch] = useStateValue();
  const [isLoaded, setIsLoaded] = useState(false);
  const { avatar_url, name, login, followers, following } = state.user;
  const history = useHistory();

  useEffect(() => {
    let loadedUser = userlogin();

    if (!loadedUser) {
      history.push('/');
    } else {
      loadUser(dispatch);
      setIsLoaded(true);
    }
  },[isLoaded])

  return (
    <Container>
      <div>
        <Aside
        avatar={avatar_url}
        name={name}
        login={login}
        followers={followers}
        following={following}
        />
      </div>
      <DivList>
        <Tabs/>
        <SearchBar/>
        <List/>
      </DivList>
    </Container>  
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 200px);
  width: 70%;
  margin-top: 32px;
`;

const DivList = Styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
  margin: 0 30 10px 10px;
`;
export default Home





