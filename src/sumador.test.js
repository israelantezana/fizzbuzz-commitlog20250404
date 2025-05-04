//import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("deberia mostrar el numero", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia mostrar el numero cuando no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });

  it("deberia mostrar fizz para 3", () => {
    expect(fizzbuzz(3)).toEqual("fizz");
  });

  it("deberia mostrar fizz para multiplos de 3", () => {
    expect(fizzbuzz(6)).toEqual("fizz");
    expect(fizzbuzz(9)).toEqual("fizz");
  });

  it("deberia mostrar buzz para 5", () => {
    expect(fizzbuzz(5)).toEqual("buzz");
  });

  it("deberia mostrar buzz para multiplos de 5", () => {
    expect(fizzbuzz(10)).toEqual("buzz");
  });

  it("deberia mostrar fizzbuzz para multiplos de 3 y 5", () => {
    expect(fizzbuzz(15)).toEqual("fizzbuzz");
  });
});

function fizzbuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return "fizzbuzz";
  if (n % 5 === 0) return "buzz";
  if (n % 3 === 0) return "fizz";
  return "" + n;
}
