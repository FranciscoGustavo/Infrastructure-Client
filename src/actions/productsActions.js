import * as requests from '../request/products' 

export function loadProducts (products) {
    return { type : 'LOAD_PRODUCTS', products : products}
}

export function loadProduct(product) {
    return { type : 'LOAD_PRODUCT', product : product}
}

export function editProduct(product){
    return { type : 'UPDATE_PRODUCT', product : product}
}




export function loadAll(){
    return (dispatch, getState) => {
        requests.getAll().then(result => {
            dispatch(loadProducts(result))
        })
    }
}

export function loadOne(id){
    return (dispatch, getState) => {
        requests.getById(id).then(result => {
            dispatch(loadProduct(result))
        })
    }
}

export function update(data, jwt, id){
    return (dispatch, getState) => {
        requests.editProdut(data, jwt, id).then(result => {
            //console.log(result._category)
            dispatch(editProduct(result))
        })
    }
}