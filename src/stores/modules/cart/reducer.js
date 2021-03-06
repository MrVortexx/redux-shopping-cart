import produce from 'immer'
export default function cart (state = [], action){
    switch(action.type){
        case'ADD_TO_CART':
            return produce(state,  draft=> {
                const productIndex = draft.findIndex(product=> product.id === action.product.id)
                 
                if(productIndex>=0) {
                    draft[productIndex].amount+=1
                    console.log('ab');
                    
                }else {
                    draft.push({
                        ...action.product, amount: 1
                    })
                }           
            })
            
        case 'DELETE_FROM_CART':
            return produce(state, draft=>{
                const productIndex = draft.findIndex(product=> product.id == action.id)
               if(productIndex!=-1) {
                    draft.splice(productIndex, 1)
               }    
            })
             
        case 'CHANGE_AMOUNT': 
            return produce(state, draft=> {
                const productIndex = draft.findIndex(product=> product.id == action.id)
                   switch(action.symbol){
                        case '-':{
                            if(draft[productIndex].amount>1){
                                    draft[productIndex].amount -=1
                            }
                        }
                            break
                        case '+':
                             draft[productIndex].amount+=1                                                                    
                    }
            })  

         default:
            return state
    }
} 
 