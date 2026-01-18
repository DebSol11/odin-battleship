const Ship = require("./ship");

describe("Ship", () => {
  let ship;

  beforeEach(() => {
    ship = new Ship(4);
  });

  test("ship size should be four", () => {
    expect(ship.length).toBe(4);
  });

  test("should increase hits when hit() is called", () => {
    ship.hit();
    expect(ship.hits).toBe(1); 
  });

  test('should be sunk when hits equal length', () => {
    ship.hit();
    ship.hit();
    ship.hit();
    ship.hit(); 
    expect(ship.isSunk()).toBe(true); 
  });

  test('should not be sunk if hits are less than length', () => {
    ship.hit();
    expect(ship.isSunk()).toBe(false); 
  });
});