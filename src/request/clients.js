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