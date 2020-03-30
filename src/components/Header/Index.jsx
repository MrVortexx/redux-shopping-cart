import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import logo from '../../assets/header/Logo.svg'
import {MdShoppingBasket} from 'react-icons/md'

import { Container, Cart } from './styles';
 function Header({cart}) {
    
  return (
    <Container>     
        <Link to ='/'>        
         <img src={logo} alt=""/>
        </Link>

        <Cart to ="/cart"> 
            <div>
                <strong>Meu carrinho</strong>
                <span>{cart.length} itens</span>
            </div>
            <MdShoppingBasket color="#fff" size = {36}/>

        </Cart>            
    </Container>
  );
}
export default connect(state => ({
  cart: state.cart
}))(Header)