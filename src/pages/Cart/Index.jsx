import React from 'react';
import formated from '../../util/formated'
import {connect} from 'react-redux'
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import { Container, Table, Total } from './styles';

 function Cart({cart,total, dispatch}) {
   const deleteProduct = (id) =>{
      dispatch({
        type: 'DELETE_FROM_CART',
        id
      })
   }
   const changeAmount = (id, symbol) => {
      dispatch({
        type: 'CHANGE_AMOUNT',
        id,
        symbol
      })
   }
  return (
    <Container>
        <Table>
            <thead>
              <tr>
                <th/>
                <th>PRODUTO</th>  
                <th>QTD</th>  
                <th>SUBTOTAL</th>  
                <th/>                   
              </tr>
            </thead>
             {cart.map(carItem => (
              <tbody>
              <tr>
                <td>
                    <img src={carItem.image}alt=""/>
                </td>
                <td>
                    <strong>{carItem.title}</strong>
                    <span>{carItem.price}</span>
                </td>

                <td>
                  <div>
                      <button onClick ={()=> changeAmount(carItem.id, '-')}>
                          <MdRemoveCircleOutline SIZE = {20} color="7159c1"/>
                      </button>

                     <input type="number" readOnly  value ={carItem.amount}/>

                      <button onClick ={()=> changeAmount(carItem.id, '+')}>
                          <MdAddCircleOutline SIZE = {20} color="7159c1"/>
                      </button>
                  </div>
                </td> 

                <td>
                  <strong>{carItem.subtotal}</strong>
                </td> 
                <td>
                  <button onClick= {()=> deleteProduct(carItem.id)}><MdDelete size = {20} color="7159c1"/></button>
                </td>
              </tr>

          </tbody>


            ))}
            
            </Table>

        <div>
          <button>Finalizar</button>
          <Total>
              <span>Total</span>
              <strong>{total}</strong>

          </Total>
        
        </div>
    </Container>
  );
}
 const mapStateToProps = state => ({
  cart: state.cart.map(carItem=> ({
    ...carItem,
    subtotal : formated((carItem.price)*carItem.amount)
  })),
  total:formated (state.cart.reduce((acumullator, currentValue)=> {
    return   acumullator + ( currentValue.price *currentValue.amount)
  }, 0))
});
export default connect(mapStateToProps)(Cart)