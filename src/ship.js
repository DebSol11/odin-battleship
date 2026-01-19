class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.coordinates = [];
  }
  hit() {
    this.hits++;
  }
  isSunk() {
    return this.hits >= this.length;
  }
}

export {Ship};
// module.exports = Ship;
