require('./index.js');
const assert = require('assert');

const arr = [1, 1, 2, 3, 5, 8, 13];

describe('Array Test', () => {
  it('should return distinct values from an array', () => {
    assert.deepEqual(arr.unique(), [1, 2, 3, 5, 8, 13]);
  });

  it('should return diff values between arrays', () => {
    assert.deepEqual(arr.diff([1, 1, 3, 5, 13]), [2, 8]);
  });
  
  it('should remove a item', () => {
    assert.deepEqual(arr.remove(8), [1, 1, 2, 3, 5, 13]);
  });

  it('should group items', () => {
    assert.deepEqual(arr.group(item => item % 2 === 0 ? 'even' : 'odd'), {
      'odd': [1, 1, 3, 5, 13],
      'even': [2, 8],
    });
  });

  it('should group items', () => {
    assert.deepEqual(arr.group(item => item % 2 === 0 ? 'even' : 'odd', item => item * 10), {
      'odd': [10, 10, 30, 50, 130],
      'even': [20, 80],
    });
  });

  
  it('should group items in array', () => {
    assert.deepEqual(arr.groupArray(item => item % 2 === 0 ? 'even' : 'odd'), [
      { key: 'odd', index: 0, values: [1, 1, 3, 5, 13]},
      { key: 'even', index: 1, values: [2, 8]},
    ]);
  });

  it('should group items in array', () => {
    assert.deepEqual(arr.groupArray(item => item % 2 === 0 ? 'even' : 'odd', item => item * 10), [
      { key: 'odd', index: 0, values: [10, 10, 30, 50, 130]},
      { key: 'even', index: 1, values: [20, 80]},
    ]);
  });
  
  it('should return the expected number of elements when it gets random values from an array', () => {
    assert.equal(arr.random(1).length, 1);
  });

  it('should return the same number of elements when it gets random values from a array', () => {
    assert.equal(arr.random().length, arr.length);
  });

  it('should return the same number of elements when it gets shuffled values from a array', () => {
    assert.equal(arr.shuffle().length, arr.length);
  });
  
  it('should return the sum of elements values from a array', () => {
    assert.equal(arr.sum(), (1 + 1 + 2 + 3 + 5 + 8 + 13));
  });

  it('should return the sum of elements values from a array', () => {
    assert.equal([arr, arr].sum(), (1 + 1 + 2 + 3 + 5 + 8 + 13) + (1 + 1 + 2 + 3 + 5 + 8 + 13));
  });


  it('should return the mul of elements values from a array', () => {
    assert.equal(arr.mul(), (1 * 1 * 2 * 3 * 5 * 8 * 13));
  });

  it('should return the mul of elements values from a array', () => {
    assert.equal(arr.avg(), (1 + 1 + 2 + 3 + 5 + 8 + 13) / 7);
  });

  it('should return the mul of elements values from a array', () => {
    assert.equal([arr, arr].avg(), ((1 + 1 + 2 + 3 + 5 + 8 + 13) + (1 + 1 + 2 + 3 + 5 + 8 + 13)) / 14);
  });

  it('should return a flatted array whith same items', () => {
    assert.deepEqual([[...arr], ...arr].flat().length, arr.length * 2);
  });

});