export const fizzBuzz = (arr) => {
  let outputArr = [];
  arr.forEach((e, i) => {
    if (e == "" || isNaN(e)) outputArr[i] = "Invalid item";
    else {
      let result = "";
      if (e % 3 == 0) result += "Fizz";
      if (e % 5 == 0) result += "Buzz";
      if (result == "") result = [`Divided ${e} by 3`, `Divided ${e} by 5`];
      outputArr[i] = result;
    }
  });
  return outputArr;
};
