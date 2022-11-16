function runLengthEnconding(source) {
  let result = [];
  let aux = {};

  const list = source.split('');

  let lastLetter = list[0];
  for (let i = 0; i < list.length; i++) {
    const letter = list[i];

    if (!aux[letter]) aux[letter] = 0;

    if (aux[letter] < 9) {
      aux[letter] += 1;
    } else {
      result.push(`${aux[letter]}${letter}`);
      aux[letter] = 1;
    }

    if (lastLetter !== letter) {
      result.push(`${aux[lastLetter]}${lastLetter}`);
    }

    if (i === list.length - 1) {
      result.push(`${aux[letter]}${letter}`);
    }

    lastLetter = letter;
  }

  return result.join('');
}

module.exports = { runLengthEnconding };
