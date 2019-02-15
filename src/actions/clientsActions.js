import * as requests from '../request/clients'

function loadClients(clients){
    return { type : 'LOAD_CLIENTS', clients}    
}

export function loadAll(){
    return (dispatch, getState) => {
        requests.getClients().then(result => {
            console.log(result)
            dispatch(loadClients(result))
        })
    }
}