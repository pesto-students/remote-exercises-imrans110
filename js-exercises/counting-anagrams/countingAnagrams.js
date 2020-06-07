const sortStringChars = (str) => [...str].sort().join("");

const countingAnagrams = (str) => {
  const wordFreq = {};

  if (typeof str !== "string") {
    throw TypeError("Wrong parameter type passed");
  }

  const wordsInArray = str.split(" ");

  for (let word of wordsInArray) {
    if (word.length > 1) {
      word = sortStringChars(word);
      if (wordFreq[word]) {
        wordFreq[word] += 1;
      } else {
        wordFreq[word] = 1;
      }
    }
  }

  const anagrams = Object.keys(wordFreq).filter((word) => wordFreq[word] > 1);
  return anagrams.length;
};

export { countingAnagrams };
