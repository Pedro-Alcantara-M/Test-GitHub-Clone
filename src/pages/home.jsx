import React, { useEffect, useState } from 'react'
import {useStateValue} from '../context/state'
import Styled from 'styled-components'
import Aside from '../components/aside'
import Tabs from '../components/tabs'
import SearchBar from '../components/searchBar'
import RepoList from '../components/repoList'

const Home = () => {
  const [state, dispatch] = useStateValue();
  const { avatar_url, name, login, followers, following } = state.user

  return (
    <Container>
      <div>
        <Aside
        avatar={avatar_url}
        name={name}
        login={login}
        followers={followers}
        following={following}
        repoStarred='2'
        />
      </div>
      <div className='repolist'>
          <Tabs/>
          <SearchBar/>
          <RepoList/>
      </div>
    </Container>  
  )
}


const Container = Styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: calc(100vh - 200px);
  width: 100%;
  margin-top: 32px;
`;

export default Home





