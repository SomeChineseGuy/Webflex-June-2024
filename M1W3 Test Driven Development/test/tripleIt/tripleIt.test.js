const assert = require('assert');
const doubleIt = require('../../doubleIt')

describe('This is a series of test for the function doubleIt', () => {
  // write out the first test
  it('If given the number 10 we should return the number 20', () => {
    const actual = doubleIt(10)
    const expected = 20;
    assert.strictEqual(actual, expected)
  })

  it('If given 0 we should get return the number 0', () => {
    const actual = doubleIt(0);
    const expected = 0;
    assert.strictEqual(actual, expected)
  })

  it("If we don't give it anything, it should return null", () => {
    const actual =  doubleIt()
    const expected = null;
    assert.strictEqual(actual, expected)
  })

})