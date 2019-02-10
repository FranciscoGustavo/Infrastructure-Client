import * as requests from '../request/products' 

export function loadProducts (products) {
    return { type : 'LOAD_PRODUCTS', products : products}
}

export function loadAll(){
    return (dispatch, getState) => {
        requests.getAll().then(result => {
            //console.log(result)
            dispatch(loadProducts(result))
        })
    }
}