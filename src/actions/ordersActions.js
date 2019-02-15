import * as requests from '../request/orders'

function loadOrders(orders){
    return { type : 'LOAD_ORDERS', orders}    
}

export function loadAll(){
    return (dispatch, getState) => {
        requests.getOrders().then(result => {
            console.log(result)
            dispatch(loadOrders(result))
        })
    }
}