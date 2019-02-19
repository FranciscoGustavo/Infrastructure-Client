import config from '../config/secrets'

export function getClients (){
    return fetch(config.url + 'clients')
    .then(result => {
        return result.json()
    })
}

export function postClients (data){
    return fetch(config.url + 'clients', {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json',
        }
    })
    .then(result => {
        return result.json()
    })
}

export function updateClient(data, jwt, client){
    console.log(data)
    let formData = new FormData()
    
    for(let field in data) {
        formData.append(field, data[field])
    }

    return fetch(config.url + 'clients/' + client,{
        method : 'PUT',
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