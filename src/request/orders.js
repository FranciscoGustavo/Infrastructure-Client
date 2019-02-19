import config from '../config/secrets'

export function getOrders (){
    return fetch(config.url + 'orders')
    .then(result => {
        return result.json()
    })
}
