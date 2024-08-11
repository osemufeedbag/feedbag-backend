export const cutString = (str, maxLength) => {
  if (maxLength >= str.length) {
    return str;
  }

  let endPos = str.lastIndexOf(" ", maxLength);
  if (endPos === -1) {
    endPos = maxLength;
  }

  const newString = str.slice(0, endPos);

  return newString;
};
