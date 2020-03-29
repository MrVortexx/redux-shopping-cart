import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Header from './components/Header/Index.jsx'
import Routes from './routes'
import GlobalStyles from './styles/global'
 
import store from './stores/index'
function App() {
  return (
    <Provider store= {store}>
      <BrowserRouter>
        <Header/>
        <Routes/>
        <GlobalStyles/>
      </BrowserRouter>
    </Provider>
    
  );
}

export default App;
