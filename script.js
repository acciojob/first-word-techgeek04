function firstWord(s) {
  let trimmedStr = s.trim();
  let spaceIndex = trimmedStr.indexOf(' ');
  
  if (spaceIndex == -1) {
    return trimmedStr;
  }
  return trimmedStr.substring(0, spaceIndex);
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
