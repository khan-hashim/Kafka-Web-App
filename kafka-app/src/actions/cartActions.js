import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,UPDATE_STATE_PHONE,UPDATE_STATE_ADDRESS,UPDATE_STATE_NAME,UPDATE_STATE_TOTAL_ITEMS} from './action-types/cart-actions'

//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}

export const updateStateName=(customer_name)=>{
    return{
        type: UPDATE_STATE_NAME, 
        customer_name
    }
}

export const updateStateAddress=(customer_address)=>{
    return{
        type: UPDATE_STATE_ADDRESS, 
        customer_address
    }
}

export const updateStatePhone=(customer_phone_number)=>{
    return{
        type: UPDATE_STATE_PHONE, 
        customer_phone_number
    }
}

export const updateStateTotalItems=()=>{
    return{
        type: UPDATE_STATE_TOTAL_ITEMS
    }
}

