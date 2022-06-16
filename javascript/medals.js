    const first = 3 
    const second = 2
    const third = 1

function createMedalTable(medals) {
    // unnumbers the first, second, and third podium strings
    const firstPlace = medals.map(({podium}) => podium[0].split('').slice(2).join(''))
    const secondPlace = medals.map(({podium}) => podium[1].split('').slice(2).join(''))
    const thirdPlace = medals.map(({podium}) => podium[2].split('').slice(2).join(''))

    console.log(firstPlace)

    // turns the podiums in key/values and adds points for first, second, and thrid 
    // table is created but test is failing as it does not match to test
    // What i need to do now is add duplicate scores together 
    const firstObj = Object.assign({}, ...firstPlace.map(key => ({[key]: first})))
    const secondObj = Object.assign({}, ...secondPlace.map(key => ({[key]: second})))
    const thirdObj = Object.assign({}, ...thirdPlace.map(key => ({[key]: third})))

    const actualResult = {
        ...firstObj, ...secondObj, ...thirdObj
    }

console.log(actualResult)

    return actualResult
}

module.exports = createMedalTable