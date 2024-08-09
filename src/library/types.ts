export type Cell = {
  fallback?: string;
  character?: string;
};

export type CellRow = Cell[];

export type CellGrid = CellRow[];

export type Word = {
  characters: string;
  line: number;
  start: number;
};

export const NUMBER_OF_CELLS = 13;
export const NUMBER_OF_ROWS = 8;

export const hoursMap = new Map<number, Word>([
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

export const minutesMap = new Map<number, Word>([
  [5, { characters: "FIVE", line: 2, start: 0 }],
  [10, { characters: "TEN", line: 0, start: 6 }],
  [15, { characters: "QUARTER", line: 1, start: 0 }],
  [20, { characters: "TWENTY", line: 1, start: 7 }],
  [30, { characters: "HALF", line: 0, start: 9 }],
]);

export const othersMap = new Map<string, Word>([
  ["a", { characters: "A", line: 0, start: 4 }],
  ["its", { characters: "ITS", line: 0, start: 0 }],
  ["minutes", { characters: "MINUTES", line: 2, start: 5 }],
  ["oclock", { characters: "OCLOCK", line: 7, start: 7 }],
  ["past", { characters: "PAST", line: 3, start: 0 }],
  ["to", { characters: "TO", line: 3, start: 4 }],
]);
