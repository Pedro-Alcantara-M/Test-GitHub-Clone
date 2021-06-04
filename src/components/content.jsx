import React from 'react'
import { Switch, Route } from "react-router-dom";
import Styled from 'styled-components'
import Login from '../pages/login'
import Home from '../pages/home'



const Content = () => {

  return (
    <Container>
      <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    </Container>
  )
}

const Container = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  width: 100%;


`;

export default Content;