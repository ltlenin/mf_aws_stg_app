export const post = (url, entity) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(entity),
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const checkStatus = response => {
        if (response.status >= 200 && response.status < 300) {  
            console.log(response)
            return response;
        } 
        return response.json().then(json => {
            return Promise.reject({
                status: response.status,
                ok: false,
                statusText: response.statusText,
                body: json
            });
        });
    };

    const parseJSON = response => {
        if (response.status === 204 || response.status === 205) {
            
            return null;
        }
        return response.json();
    };

    const handleError = error => {
        error.response = {
            status: 0,
            statusText:
                "Cannot connect. Please make sure you are connected to internet."
        };
        console.log("error", error)
        throw error;
    };

    fetch(url, options)
        .catch(handleError)  
        .then(checkStatus)
        .then(parseJSON)
        .catch(error => {
            throw error;
        }); 
}

