function createMedalTable(medals) {
  const results = medals.map(({ podium }) => podium);
  const mergeResults = results.join().split(",");

  let actualResult = {};

  const filterFirst = mergeResults.filter((first) => first.startsWith("1."));
  const firstPlace = filterFirst.map((first) => first.slice(2));
  for (let i = 0; i < firstPlace.length; i++) {
    if (actualResult[firstPlace[i]]) {
      actualResult[firstPlace[i]] += 3;
    } else {
      actualResult[firstPlace[i]] = 3;
    }
  }

  const filterSecond = mergeResults.filter((second) => second.startsWith("2."));
  const secondPlace = filterSecond.map((second) => second.slice(2));
  for (let i = 0; i < secondPlace.length; i++) {
    if (actualResult[secondPlace[i]]) {
      actualResult[secondPlace[i]] += 2;
    } else {
      actualResult[secondPlace[i]] = 2;
    }
  }

  const filterThird = mergeResults.filter((third) => third.startsWith("3."));
  const thirdPlace = filterThird.map((third) => third.slice(2));
  for (let i = 0; i < thirdPlace.length; i++) {
    if (actualResult[thirdPlace[i]]) {
      actualResult[thirdPlace[i]] += 1;
    } else {
      actualResult[thirdPlace[i]] = 1;
    }
  }

  return actualResult;
}

module.exports = createMedalTable;
