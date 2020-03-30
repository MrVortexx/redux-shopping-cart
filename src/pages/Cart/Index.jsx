import React from 'react';
import {connect} from 'react-redux'
import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import { Container, Table, Total } from './styles';

 function Cart({cart}) {
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
                    <button><MdRemoveCircleOutline SIZE = {20} color="7159c1"/></button>
                    <input type="number" readOnly  value ={carItem.amount}/>
                    <button><MdAddCircleOutline SIZE = {20} color="7159c1"/></button>
                  </div>
                </td> 

                <td>
                  <strong>{carItem.price}</strong>
                </td> 
                <td>
                  <button><MdDelete size = {20} color="7159c1"/></button>
                </td>
              </tr>

          </tbody>


            ))}
            
            </Table>

        <div>
          <button>Finalizar</button>
          <Total>
              <span>Total</span>
              <strong>130,00</strong>

          </Total>
        
        </div>
    </Container>
  );
}
 const mapStateToProps = state => ({
  cart: state.cart
});
export default connect(mapStateToProps)(Cart)