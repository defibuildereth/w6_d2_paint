const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('Paint Can', function () {

  let paintCan;

  beforeEach(function () {
    paintCan = new PaintCan (10)
  });

  it('should have a number of litres of paint', function () {
    const actual = paintCan.size;
    assert.strictEqual(actual, 10)
  });

  it('should not start empty', function () {
    const actual = paintCan.volumeLeft;
    assert.strictEqual(actual, 10)

  });

  it('should be able to empty itself', function () {
    paintCan.empty();
    const actual = paintCan.volumeLeft;
    assert.strictEqual(actual, 0)

  });

});
