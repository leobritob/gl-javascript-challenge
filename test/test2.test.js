const { expect } = require('chai');
const { sortedSquareArray } = require('../test2');

describe('test2', () => {
  it('should return correctly for ([1, 2, 3, 5, 6, 8, 9])', () => {
    // Arrange
    const example1 = [1, 2, 3, 5, 6, 8, 9];
    // Act
    const result = sortedSquareArray(example1);
    // Assert
    expect(result.toString()).to.be.equal([1, 4, 9, 25, 36, 64, 81].toString());
  });

  it('should return correctly for ([-2, -1])', () => {
    // Arrange
    const example1 = [-2, -1];
    // Act
    const result = sortedSquareArray(example1);
    // Assert
    expect(result.toString()).to.be.equal([1, 4].toString());
  });

  it('should return correctly for ( [-10, -5, 0, 5, 10])', () => {
    // Arrange
    const example1 = [-10, -5, 0, 5, 10];
    // Act
    const result = sortedSquareArray(example1);
    // Assert
    expect(result.toString()).to.be.equal([0, 25, 25, 100, 100].toString());
  });
});
