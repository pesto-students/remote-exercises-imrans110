function aperture(n, list) {
  const arrayLength = list.length - n + 1;
  const newList = new Array(arrayLength >= 0 ? arrayLength : 0);
  for (const [index, _] of newList.entries()) {
    if (index > arrayLength) {
      break;
    }
    newList[index] = list.slice(index, index + n);
  }
  return newList;
}

export { aperture };
