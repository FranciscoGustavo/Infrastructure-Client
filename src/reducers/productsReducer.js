export default function productsReducer (state = [], action) {
    switch(action.type){
        case 'LOAD_PRODUCTS':
            return action.products
        case 'LOAD_PRODUCT':
            return action.product
        case 'UPDATE_PRODUCT' : 
            return action.product
        default: return state
    }
}