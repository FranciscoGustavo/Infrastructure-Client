function createSession (data) {
    return fetch('http://localhost:8080/sessions',{
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        return response.json()
    })
}

export default createSession