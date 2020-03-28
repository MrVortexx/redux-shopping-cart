import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Index.jsx'
import Routes from './routes'
import GlobalStyles from './styles/global'
 
function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Routes/>
        <GlobalStyles/>
   </BrowserRouter>
  );
}

export default App;
