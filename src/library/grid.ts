export type Cell = {
  fallback?: string;
  character?: string;
};

export type Row = Cell[];

export type Grid = Row[];

type Word = {
  characters: string;
  line: number;
  start: number;
};

export const NUMBER_OF_CELLS = 13;
export const NUMBER_OF_ROWS = 8;

const hoursMap = new Map<number, Word>([
  [1, { characters: "ONE", line: 3, start: 7 }],
  [2, { characters: "TWO", line: 3, start: 9 }],
  [3, { characters: "THREE", line: 4, start: 0 }],
  [4, { characters: "FOUR", line: 4, start: 5 }],
  [5, { characters: "FIVE", line: 4, start: 9 }],
  [6, { characters: "SIX", line: 5, start: 0 }],
  [7, { characters: "SEVEN", line: 5, start: 4 }],
  [8, { characters: "EIGHT", line: 5, start: 8 }],
  [9, { characters: "NINE", line: 6, start: 0 }],
  [10, { characters: "TEN", line: 6, start: 0 }],
  [11, { characters: "ELEVEN", line: 6, start: 0 }],
  [12, { characters: "TWELVE", line: 7, start: 0 }],
]);

const minutesMap = new Map<number, Word>([
  [5, { characters: "FIVE", line: 2, start: 0 }],
  [10, { characters: "TEN", line: 0, start: 6 }],
  [15, { characters: "QUARTER", line: 1, start: 0 }],
  [20, { characters: "TWENTY", line: 1, start: 7 }],
  [30, { characters: "HALF", line: 0, start: 9 }],
]);

const othersMap = new Map<string, Word>([
  ["a", { characters: "A", line: 0, start: 4 }],
  ["its", { characters: "ITS", line: 0, start: 0 }],
  ["minutes", { characters: "MINUTES", line: 2, start: 5 }],
  ["oclock", { characters: "OCLOCK", line: 7, start: 7 }],
  ["past", { characters: "PAST", line: 3, start: 0 }],
  ["to", { characters: "TO", line: 3, start: 4 }],
]);

export const addFallbacks = (grid: Grid) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let chars: string[] = [];

  const random = () => {
    if (!chars.length) {
      chars = [...alphabet];
    }

    const index = Math.floor(Math.random() * chars.length);
    const char = chars[index];
    chars.splice(index, 1);

    return char;
  };

  return grid.map(row =>
    row.map(cell => ({
      ...cell,
      fallback: random(),
    }))
  );
};

export const applyWordListToGrid = (grid: Grid, words: Word[]) =>
  grid.map((row, index) => {
    const rowWords = words.filter(word => word.line === index);
    return applyWordListToRow(row, rowWords);
  });

export const applyWordListToRow = (row: Row, words: Word[]) => {
  const rowMap = new Map<number, string>();

  words.forEach(word => {
    const characters = [...word.characters];
    characters.forEach((character, index) => {
      rowMap.set(word.start + index, character);
    });
  });

  return row.map((cell, index) => ({ ...cell, character: rowMap.get(index) }));
};

const getHours = (hours: number, minutes: number) => {
  if (minutes > 30) {
    hours++;
  }

  if (hours > 12) {
    hours = hours - 12;
  } else if (hours === 0) {
    hours = 12;
  }

  return hoursMap.get(hours);
};

const getMinutes = (minutes: number) => {
  const words: (Word | undefined)[] = [];

  if (isBetween(2, 7, minutes) || isBetween(53, 58, minutes)) {
    words.push(minutesMap.get(5));
    words.push(othersMap.get("minutes"));
  } else if (isBetween(7, 13, minutes) || isBetween(47, 53, minutes)) {
    words.push(minutesMap.get(10));
    words.push(othersMap.get("minutes"));
  } else if (isBetween(13, 17, minutes) || isBetween(42, 47, minutes)) {
    words.push(minutesMap.get(15));
    words.push(othersMap.get("a"));
  } else if (isBetween(17, 25, minutes) || isBetween(35, 42, minutes)) {
    words.push(minutesMap.get(20));
    words.push(othersMap.get("minutes"));
  } else if (isBetween(25, 35, minutes)) {
    words.push(minutesMap.get(30));
    words.push(othersMap.get("a"));
  }

  if (minutes > 30) {
    words.push(othersMap.get("to"));
  } else {
    words.push(othersMap.get("past"));
  }

  return words;
};

export const getWordsList = (hours: number, minutes: number) =>
  [othersMap.get("its"), getMinutes(minutes), getHours(hours, minutes), othersMap.get("oclock")]
    .flat()
    .filter(word => !!word);

const isBetween = (min: number, max: number, value: number) => value > min && value <= max;

export const makeGrid = (cells: number, rows: number) =>
  Array(rows)
    .fill(null)
    .map(() => Array<Cell>(cells).fill({ character: undefined, fallback: undefined }));
