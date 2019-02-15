export default function ordersReducer(state = [], action){
    switch(action.type){
        case 'LOAD_ORDERS':
            return action.orders
        default :
            return state
    }
}