//i've created three loops which iterate over each podium finish and add points for 1st 2nd 3rd
//  Only part of the test failing is that my fuction has Qatar on 2 when they should be on 3
// Qatar is joint 1st in high jump. I need to alter function to take into account joint places.

function createMedalTable(medals) {
    
    const firstPlace = medals.map(({podium}) => podium[0].split('').slice(2).join(''))
      let medalCount = {}
  	    for(let i=0; i<firstPlace.length; i++) {
            if (medalCount[firstPlace[i]]) {
                medalCount[firstPlace[i]] += 3
        } else {
                medalCount[firstPlace[i]] = 3
      }
    }

    const secondPlace = medals.map(({podium}) => podium[1].split('').slice(2).join(''))
    
        for(let i=0; i<secondPlace.length; i++) {
            if (medalCount[secondPlace[i]]) {
                medalCount[secondPlace[i]] += 2
     } else {
                 medalCount[secondPlace[i]] = 2
     }
   }
    const thirdPlace = medals.map(({podium}) => podium[2].split('').slice(2).join(''))
      
       for(let i=0; i<thirdPlace.length; i++) {
         if (medalCount[thirdPlace[i]]) {
            medalCount[thirdPlace[i]] += 1
    } else {
           medalCount[thirdPlace[i]] = 1
    }
  }

const actualResult = medalCount

console.log(actualResult)

    return actualResult
}

module.exports = createMedalTable