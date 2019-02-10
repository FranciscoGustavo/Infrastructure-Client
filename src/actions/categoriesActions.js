import * as requests from '../request/categories'

export function loadCategories(categories){
    return { type: 'LOAD_CATEGORIES', categories : categories}
}

export function loadAll() {
    return (dispatch, getState) => {
        requests.getAll().then(res => {
            //console.log(res)
            dispatch(loadCategories(res))
        })
    }
}

export function createCategory(data, jwt){
    return (dispatch, getState) => {
        requests.createCategory(data, jwt)
        .then(res => {
            dispatch(createNewCategory(res))
        })
    }
}

function createNewCategory(categories) {
    return { type : 'CREATE_CATEGORY', categories :categories}
}