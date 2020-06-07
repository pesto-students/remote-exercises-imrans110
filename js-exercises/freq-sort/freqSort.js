function freqSort(elementArray) {
  const elementFrequency = {};

  for (const element of elementArray) {
    if (elementFrequency[element]) {
      elementFrequency[element] += 1;
    } else {
      elementFrequency[element] = 1;
    }
  }

  const frequencyKeys = Object.keys(elementFrequency);
  const sortedKeys = frequencyKeys.sort(function (a, b) {
    return elementFrequency[a] - elementFrequency[b];
  });

  return sortedKeys.reverse();
}

export { freqSort };
