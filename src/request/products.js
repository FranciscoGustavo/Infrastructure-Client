import secrets from '../config/secrets'

export function getAll () {
    return fetch(secrets.url + 'products', {
        method: 'GET'
    })
        .then(data => {
            return data.json()
        })
        .catch(error => {
            console.log(error)
        })
}

export function createProdut(data, jwt){
    let formData = new FormData()
    
    for(let field in data) {
        formData.append(field, data[field])
    }

    console.log(formData)

    return fetch(secrets.url + 'products',{
        method : 'POST',
        body : formData,
        headers : {
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + jwt
        } 
    })
    .then(data => {
        return data.json()
    })
    .catch(error => {
        console.log(error)
    })
}