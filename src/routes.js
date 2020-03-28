import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home/Index.jsx'
import Cart from './pages/Cart/Index.jsx'

export default function Routes () {
    return (
        <Switch> 
            <Route path="/" exact component = {Home}/>      
            <Route path="/cart" exact component = {Cart}/>
        </Switch>
    )   
}