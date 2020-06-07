function freqSort(elArray) {
  const elFrequency = {};

  for (const el of elArray) {
    if (elFrequency[el]) {
      elFrequency[el] += 1;
    } else {
      elFrequency[el] = 1;
    }
  }

  const frequencyKeys = Object.keys(elFrequency);
  const sortedKeys = frequencyKeys.sort(function (a, b) {
    return elFrequency[a] - elFrequency[b];
  });

  return sortedKeys.reverse();
}

export { freqSort };
