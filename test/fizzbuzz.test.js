import { fizzBuzz } from "../utils/utils.js";
import { assert, expect } from "chai";

describe("Tests for Fizz Buzz", () => {
  it("output should be type of array", () => {
    assert.typeOf(fizzBuzz([]), "array");
  });

  it("output should be Fizz", () => {
    expect(fizzBuzz([3])).to.eql(["Fizz"]);
  });

  it("output should be Buzz", () => {
    expect(fizzBuzz([3])).to.eql(["Fizz"]);
  });

  it("tests longer output", () => {
    expect(fizzBuzz([3, 5, 15])).to.eql(["Fizz", "Buzz", "FizzBuzz"]);
  });

  it("tests invalid and empty items", () => {
    expect(fizzBuzz(["", "A", "$$"])).to.eql([
      "Invalid item",
      "Invalid item",
      "Invalid item",
    ]);
  });

  it("tests undivisable items", () => {
    expect(fizzBuzz([11, 2, 3])).to.eql([
      ["Divided 11 by 3", "Divided 11 by 5"],
      ["Divided 2 by 3", "Divided 2 by 5"],
      "Fizz",
    ]);
  });
});
