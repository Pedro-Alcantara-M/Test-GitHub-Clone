import React from 'react'
import { Switch, Route } from "react-router-dom";
import Styled from 'styled-components'
import Repolist from './repoList'
import StarredList from './starredList'

const List = () => {

  return(
    <Container>
      <Switch>
          <Route exact path="/home">
            <Repolist />
          </Route>
          <Route path="/home/starredlist">
            <StarredList/>
          </Route>
        </Switch>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 70px);  
  overflow: scroll;
`; 

export default List