function createMedalTable(medals) {

    const firstPlace = medals.map(({podium}) => podium)
 
     const merge = firstPlace.join().split(',')
   
     const filterFirst = merge.filter(first => first.startsWith('1.'))
     const firstObj = filterFirst.map(first => first.slice(2))
     
     const filterSecond = merge.filter(second => second.startsWith('2.'))
     const secondObj = filterSecond.map(second => second.slice(2))
     
     const filterThird = merge.filter(third => third.startsWith('3.'))
     const thirdObj = filterThird.map(third => third.slice(2))
    
    
      let medalCount = {}
  	    for(let i=0; i<firstObj.length; i++) {
            if (medalCount[firstObj[i]]) {
                medalCount[firstObj[i]] += 3
        } else {
                medalCount[firstObj[i]] = 3
      }
    }
    
        for(let i=0; i<secondObj.length; i++) {
            if (medalCount[secondObj[i]]) {
                medalCount[secondObj[i]] += 2
     } else {
                 medalCount[secondObj[i]] = 2
     }
   }
      
       for(let i=0; i<thirdObj.length; i++) {
         if (medalCount[thirdObj[i]]) {
            medalCount[thirdObj[i]] += 1
    } else {
           medalCount[thirdObj[i]] = 1
    }
  }

const actualResult = medalCount

console.log(actualResult)

    return actualResult
}

module.exports = createMedalTable