    const first = 3 
    const second = 2
    const third = 1

function createMedalTable(medals) {
    // nunnumbers the first, second, and third podium strings
    const firstPlace = medals.map(({podium}) => podium[0].split('').slice(2).join(''))
      let firstPlaceCount = {}
  	    for(let i=0; i<firstPlace.length; i++) {
            if (firstPlaceCount[firstPlace[i]]) {
                firstPlaceCount[firstPlace[i]] += 3
        } else {
                firstPlaceCount[firstPlace[i]] = 3
      }
    }

    const secondPlace = medals.map(({podium}) => podium[1].split('').slice(2).join(''))
      let secondPlaceCount = {}
        for(let i=0; i<secondPlace.length; i++) {
            if (secondPlaceCount[secondPlace[i]]) {
                secondPlaceCount[secondPlace[i]] += 2
     } else {
                 secondPlaceCount[secondPlace[i]] = 2
     }
   }
    const thirdPlace = medals.map(({podium}) => podium[2].split('').slice(2).join(''))
      let thirdPlaceCount = {}
       for(let i=0; i<thirdPlace.length; i++) {
         if (thirdPlaceCount[thirdPlace[i]]) {
            thirdPlaceCount[thirdPlace[i]] += 1
    } else {
           thirdPlaceCount[thirdPlace[i]] = 1
    }
  }

    console.log(firstPlace)

    // turns the podiums in key/values and adds points for first, second, and thrid 
    // table is created but test is failing as it does not match to test
    // What i need to do now is add duplicate scores together 

    // const firstObj = Object.assign({}, ...firstPlace.map(key => ({[key]: first})))
    // const secondObj = Object.assign({}, ...secondPlace.map(key => ({[key]: second})))
    // const thirdObj = Object.assign({}, ...thirdPlace.map(key => ({[key]: third})))

    const actualResult = {...firstPlaceCount, ...secondPlaceCount, ...thirdPlaceCount}

console.log(actualResult)

    return actualResult
}

module.exports = createMedalTable