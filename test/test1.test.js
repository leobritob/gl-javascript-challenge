const { expect } = require('chai');
const { runLengthEnconding } = require('../test1');

describe('test1', () => {
  it('should return length enconding correctly for (AAAAAAAAAAAAABBCCCCDD)', () => {
    // Arrange
    const example1 = 'AAAAAAAAAAAAABBCCCCDD';
    // Act
    const result = runLengthEnconding(example1);
    // Assert
    expect(result).to.equal('9A4A2B4C2D');
  });

  it('should return length enconding correctly for (aA)', () => {
    // Arrange
    const example1 = 'aA';
    // Act
    const result = runLengthEnconding(example1);
    // Assert
    expect(result).to.equal('1a1A');
  });

  it('should return length enconding correctly for (122333)', () => {
    // Arrange
    const example1 = '122333';
    // Act
    const result = runLengthEnconding(example1);
    // Assert
    expect(result).to.equal('112233');
  });
});
