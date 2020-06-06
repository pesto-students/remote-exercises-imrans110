function isString(stringMaybe) {
  return typeof stringMaybe === "string";
}

function betterStringLibrary(...args) {
  this.reverse = (string) => {
    if (!isString(string)) {
      throw new Error("Input type must be a string");
    }
    const normalizedString = string.normalize();
    const reversedString = [...normalizedString].reverse().join("");

    return reversedString;
  };

  this.equal = (firstString, secondString) => {
    if (!isString(firstString) || !isString(secondString)) {
      throw new Error("Input type must be a string");
    }
    return firstString.normalize() === secondString.normalize();
  };
}

const betterStringLib = new betterStringLibrary();

export { betterStringLib };
