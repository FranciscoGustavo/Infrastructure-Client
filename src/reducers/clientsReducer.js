export default function clientsReducer(state = [], action){
    switch(action.type){
        case 'LOAD_CLIENTS':
            return action.clients
        default :
            return state
    }
}