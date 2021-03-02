const googleSearch = require('./script');


dbMock = [
    'dog.com',
    'rat.com',
    'swim.com',
    'buffloburger.com',
    'desiny.com',
    'dogpictrue.com'
];



describe(`googleSearch`, () => {

    it('is silly test', () => {
        expect('hello').toBe('hello')

    })


    it('is search in google', () => {
        expect(googleSearch('testtest', dbMock)).toEqual([])
        expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dogpictrue.com'])

    })


    it(`work with Undefiend and null input`, () => {

        expect(googleSearch(undefined, dbMock)).toEqual([])
        expect(googleSearch(null, dbMock)).toEqual([])
    })

    it('does not return more than 3 matches ', () => {
        expect(googleSearch('.com', dbMock).length).toEqual(3);
    })

})