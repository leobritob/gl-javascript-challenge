function sortedSquareArray(source) {
  return source.map((item) => item * item).sort((a, b) => a - b);
}

module.exports = { sortedSquareArray };
