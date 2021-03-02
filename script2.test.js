const fetch = require('node-fetch');
const swapi = require('./script2');


it(`calls Api to getpeople`, () => {
    expect.assertions(1)
    return swapi.GetPeopleFromApi(fetch).then(data => {
        expect(data.count).toEqual(82)
    })
})


it(`calls Api to getpeople with Promise`, () => {
    expect.assertions(2)
    return swapi.GetPeopleFromApiPromise(fetch)
        .then(data => {
            console.log(result, `result `)
            expect(data.count).toEqual(87)
            expect(data.result.length).toBeGreaterThan(5)
        })
})
