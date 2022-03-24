export const fizzBuzzValidator = (input) => {
  if (!input) return [new Error("please enter some input data!"), ""];
  if (!Array.isArray(input))
    return [new Error("please enter valid input data!"), ""];
  return ["", input];
};
