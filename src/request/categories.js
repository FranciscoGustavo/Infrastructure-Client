import config from '../config/secrets'

export function getAll(){
    return fetch(config.url + 'categories')
    .then(res => {
        return res.json()
    })
    .catch(console.log)
}

export function createCategory(data, jwt){
    return fetch(config.url + 'categories',{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json',
            'Accept' : 'application/json',
            'Authorization' : 'Bearer ' + jwt
        } 
    })
    .then(res => {
        return res.json()
    })
    .catch(console.log)
}