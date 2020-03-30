import React,{Component} from 'react'
import api from '../../services/api'
import {connect} from 'react-redux'
import {MdAddShoppingCart} from 'react-icons/md'
import formated from '../../util/formated'

import { ProductList } from './styles';

 class Home extends Component{
    state = {
        products: []
    }   
    async componentDidMount(){
        const products = await api.get('/products')
        const data = products.data.map(product => (
            {...product,
                priceFormated: formated(product.price)

            }
        ))
        this.setState({
            products: data
        })        
    }
      addProduct = (product) =>{
        const {dispatch} = this.props
        dispatch({
            type: 'ADD_TO_CART',
            product
        })
    }
    render() {
        const products = this.state.products
        return(
            <ProductList>   
           { products.map(product=> (           
                <li>
                    <img src={product.image} alt ="tenis"/>

                    <strong> {product.title}</strong>
                    <span> {product.priceFormated}</span>
                    <button onClick = {()=>this.addProduct(product)}>
                        <div>
                            <MdAddShoppingCart size ={16} color="#fff"/> 3
                        </div>                   
                            <span>adicionar ao carrinho</span>
                        
                    </button>             
                </li>       
            ))}
            </ProductList>            
     )
  }
}
export default connect()(Home)