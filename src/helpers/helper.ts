export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const handleError = (error: any) => {
  console.error("Error:", error);
  throw new Error(error);
};
