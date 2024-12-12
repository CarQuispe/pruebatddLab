import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 4)).toEqual(7);
  });
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 5)).toEqual(8);
  });
});


