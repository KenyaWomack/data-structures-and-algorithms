// 'use strict';

// const { mainModule } = require('process');

// // need to write the "callback" compareYear
// function sortYear(arr) {
//   arr.sort(compareYear)
// }


// function compareYear() {
//   //do the thing
// }

// function sortTitle(arr) {
//   arr.sort(compareTitle)
// }


// function compareTitle() {
//   //do the thing
// }


// module.exports = {sortYear, compareYear, sortTitle, compareTitle}

'use strict';

const { Movies } = require('./movies');

function sortYear(arr) {
  return arr.sort(compareYear);
}

function compareYear(a, b) {
  return b.year - a.year;
}

function sortTitle(arr) {
  return arr.sort(compareTitle);
}

function compareTitle(a, b) {
  // Implement the comparison logic here
  const titleA = removeLeadingWords(a.title);
  const titleB = removeLeadingWords(b.title);
  return titleA.localeCompare(titleB);
}

function removeLeadingWords(title) {
  const ignoreWords = ['A', 'An', 'The'];
  const words = title.split(' ');
  if (ignoreWords.includes(words[0])) {
    return words.slice(1).join(' ');
  }
  return title;
}

// Test the sorting functions
sortYear(Movies);
console.log('Sorted by recent year:', Movies);

sortTitle(Movies);
console.log('Sorted alphabetically:', Movies);

module.exports = { sortYear, compareYear, sortTitle, compareTitle, removeLeadingWords };
