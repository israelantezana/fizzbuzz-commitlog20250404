//import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("deberia mostrar el numero", () => {
    expect(fizzbuzz(1)).toEqual("1");
  });

  it("deberia mostrar el numero cuando no sigue una regla", () => {
    expect(fizzbuzz(2)).toEqual("2");
  });
});

function fizzbuzz(n) {
  return "" + n;
}
