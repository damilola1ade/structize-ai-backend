export type Job = {
  type: string;
  func: (a: number, b: number) => number;
};

export type Input = {
  a: number;
  b: number;
};
