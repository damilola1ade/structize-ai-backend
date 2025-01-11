export interface Job {
  type: string;
  func: (a: number, b: number) => number;
}