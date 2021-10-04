const wordList = {
  hours: {
    1: {
      characters: "ONE",
      index: 7,
      line: 3,
    },
    2: {
      characters: "TWO",
      index: 9,
      line: 3,
    },
    3: {
      characters: "THREE",
      index: 0,
      line: 4,
    },
    4: {
      characters: "FOUR",
      index: 5,
      line: 4,
    },
    5: {
      characters: "FIVE",
      index: 9,
      line: 4,
    },
    6: {
      characters: "SIX",
      index: 0,
      line: 5,
    },
    7: {
      characters: "SEVEN",
      index: 4,
      line: 5,
    },
    8: {
      characters: "EIGHT",
      index: 8,
      line: 5,
    },
    9: {
      characters: "NINE",
      index: 0,
      line: 6,
    },
    // eslint-disable-next-line
    10: {
      characters: "TEN",
      index: 0,
      line: 6,
    },
    11: {
      characters: "ELEVEN",
      index: 0,
      line: 6,
    },
    12: {
      characters: "TWELVE",
      index: 0,
      line: 7,
    },
  },
  minutes: {
    5: {
      characters: "FIVE",
      index: 0,
      line: 2,
    },
    // eslint-disable-next-line
    10: {
      characters: "TEN",
      index: 6,
      line: 0,
    },
    15: {
      characters: "QUARTER",
      index: 0,
      line: 1,
    },
    20: {
      characters: "TWENTY",
      index: 7,
      line: 1,
    },
    30: {
      characters: "HALF",
      index: 9,
      line: 0,
    },
  },
  words: {
    its: {
      characters: "ITS",
      index: 0,
      line: 0,
    },
    minutes: {
      characters: "MINUTES",
      index: 5,
      line: 2,
    },
    oclock: {
      characters: "OCLOCK",
      index: 7,
      line: 7,
    },
    past: {
      characters: "PAST",
      index: 0,
      line: 3,
    },
    to: {
      characters: "TO",
      index: 4,
      line: 3,
    },
  },
};

const getGrid = empty => {
  const random = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    return chars.charAt(Math.floor(Math.random() * chars.length));
  };

  const grid = [];

  for (let r = 0; r < 8; r++) {
    const row = [];

    for (let c = 0; c < 13; c++) {
      row[c] = empty ? "" : random();
    }

    grid[r] = row;
  }

  return grid;
};

const getWords = () => {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();

  const words = [wordList.words["its"]];
  let minutesSet = false;

  if (minute > 2 && minute <= 7 || minute > 53 && minute < 58) {
    words.push(wordList.minutes[5]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;

  } else if (minute > 7 && minute <= 13 || minute > 47 && minute <= 53) {
    words.push(wordList.minutes[10]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;

  } else if (minute > 13 && minute <= 17 || minute > 42 && minute <= 47) {
    words.push(wordList.minutes[15]);
    minutesSet = true;

  } else if (minute > 17 && minute <= 25 || minute > 35 && minute <= 42) {
    words.push(wordList.minutes[20]);
    words.push(wordList.words["minutes"]);
    minutesSet = true;

  } else if (minute > 25 && minute <= 35) {
    words.push(wordList.minutes[30]);
    minutesSet = true;

  }

  if (minutesSet) {
    if (minute <= 35) {
      words.push(wordList.words["past"]);
    } else {
      words.push(wordList.words["to"]);
      hour++;
    }
  } else {
    if (minute >= 30) {
      hour++;
    }
    words.push(wordList.words["oclock"]);
  }

  if (hour > 12) {
    hour = hour - 12;
  }
  words.push(wordList.hours[hour]);

  return words;
};

const populateGrid = (grid, words) => {
  words.forEach(word => {
    const row = grid[word.line];
    const characters = word.characters;
    const start = word.index;

    [...characters].forEach((rune, index) => {
      row[start + index] = rune;
    });
  });

  return grid;
};

const getRandomGrid = () => getGrid(false);

const getWordGrid = () => {
  const grid = getGrid(true);
  const words = getWords();

  return populateGrid(grid, words);
};

export { getWordGrid, getRandomGrid };
