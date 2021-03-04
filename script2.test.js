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
  return swapi.GetPeopleFromApiPromise(fetch).then(data => {
            expect(data.count).toEqual(82)
            expect(data.results.length).toBeGreaterThan(5)
        })
})


it('getPeople return count and results', () => {
    const mockFetch = jest.fn()
        .mockReturnValue(Promise.resolve({
            json: () => Promise.resolve({
                count: 87,
                results: [0, 1, 2, 3, 4, 5, 6]
            })
        }))
    expect.assertions(2)
    return swapi.GetPeopleFromApiPromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith(`https://swapi.dev/api/people`)
    })
})