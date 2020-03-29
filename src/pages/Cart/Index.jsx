import React from 'react';

import {MdRemoveCircleOutline, MdAddCircleOutline, MdDelete} from 'react-icons/md'

import { Container, Table, Total } from './styles';

export default function Cart() {
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
            <tbody>
                <tr>
                  <td>
                      <img src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x" alt=""/>
                  </td>
                  <td>
                      <strong>Tenis Nike</strong>
                      <span>129,90</span>
                  </td>

                  <td>
                    <div>
                      <button><MdRemoveCircleOutline SIZE = {20} color="7159c1"/></button>
                      <input type="number" readOnly  value ={2}/>
                      <button><MdAddCircleOutline SIZE = {20} color="7159c1"/></button>
                    </div>
                  </td> 

                  <td>
                    <strong>129,90</strong>
                  </td> 
                  <td>
                    <button><MdDelete size = {20} color="7159c1"/></button>
                  </td>

                </tr>

            </tbody>

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
