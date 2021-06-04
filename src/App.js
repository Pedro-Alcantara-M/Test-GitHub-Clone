import React from 'react'
import GlobalStyles from './globalStyles'
import { StateProvider } from './context/state'
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Content from './components/content';


const App = () => {
  const initialState = { 
    user: {},
    repository: []
  }
  
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeUser':
        return { ...state, user: action.payload };
      case "REPOSITORY": {
        return {...state, repository: action.payload };
        }
      default:
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div className="App">
        <Router>
          <GlobalStyles/>
          <Navbar/>
          <Content/>
          <Footer/>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
