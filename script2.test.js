const fetch = require('node-fetch');
const swapi = require('./script2');


it(`calls Api to getpeople`, () => {
//    expect.assertions()
    swapi.GetPeopleFromApi(fetch)
        .then(data => {
            expect(data.count).toEqual(87)
        })
})


it(`calls Api to getpeople with Promise`, () => {
    swapi.GetPeopleFromApiPromise(fetch)
        .then(data => {
            expect(data.count).toEqual(87)
        })
})
