import React from 'react';
import {Link} from 'react-router-dom'
import logo from '../../assets/header/Logo.svg'
import {MdShoppingBasket} from 'react-icons/md'

import { Container, Cart } from './styles';

export default function header() {
  return (
    <Container>     
        <Link to ='/'>        
         <img src={logo} alt=""/>
        </Link>

        <Cart>
            <div>
                <strong>Meu carrinho</strong>
                <span>3 itens</span>
            </div>
            <MdShoppingBasket color="#fff" size = {36}/>

        </Cart>
    </Container>
  );
}
