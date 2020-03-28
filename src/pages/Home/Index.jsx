import React from 'react';
import {Link} from 'react-router-dom'
import {MdAddShoppingCart} from 'react-icons/md'

import { ProductList } from './styles';

export default function Home() {
  return (
     <ProductList>
         <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>    
         <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>
           <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>
           <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>
           <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>
           <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>

            <div>
                <MdAddShoppingCart size ={16} color="#fff"/>
            </div>
        </li>
           <li>
            <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>

            <strong> Tenis Nike Revolution</strong>
            <span> R$160,00</span>
            <button>
                <div>
                    <MdAddShoppingCart size ={16} color="#fff"/> 3
                </div>
                 
                    <span>adicionar ao carrinho</span>
                
            </button>
            
        </li>
        
     </ProductList>
  );
}
