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
});

function fizzbuzz(n) {
  if (n === 3) return "fizz";
  return "" + n;
}
