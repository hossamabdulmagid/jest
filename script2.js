const fetch = require('node-fetch');



const GetPeopleFromApi = fetch => {
    return fetch(`https://swapi.dev/api/people`)
        .then(response => response.json())
        .then(data => {
            return {
                count: data.count,
                result: data.result,
            }
        })
}

GetPeopleFromApi(fetch)

const GetPeopleFromApiPromise = async (fetch) => {
    const getRequest = await fetch(`https://swapi.dev/api/people`);
    const data = await getRequest.json();
    return {
        count: data.count,
        results: data.results,
    }
}


//GetPeopleFromApi(fetch)
//GetPeopleFromApiPromise(fetch)
//console.log()


module.exports = {
    GetPeopleFromApi,
    GetPeopleFromApiPromise
}