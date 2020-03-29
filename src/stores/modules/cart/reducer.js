const cart = (state, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            return [...state, action.product]

        default: return StaticRange
    }
} 
export default cart