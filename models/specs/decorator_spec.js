const assert = require('assert');
const Decorator = require('../decorator.js');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');

describe('Decorator', function () {

  let decorator;

  beforeEach(function () {
    decorator = new Decorator ()
    paintCan1 = new PaintCan (10)
    room = new Room (25)
  });

  it('should start with an empty paint stock', function () {
    const actual = decorator.stock;
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a can of paint to paint stock', function () {
    decorator.addCan(paintCan1);
    actual = decorator.stock.length
    assert.strictEqual(actual, 1)
  });

  it('should be able to calculate total litres paint it has in stock', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);
    const actual = decorator.totalPaintLitres()
    assert.strictEqual(actual, 20)
  });

  it('should be able to calculate that it has enough paint to paint a room', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);

    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true)
    
  });

  it('should be able to calcuate that it doesnt have enough paint to paint a room', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);

    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false)
  });

  it('should be able to paint room if has enough paint in stock', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);

    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, true)
   
  });

  it('should not paint room if it has not enough paint in stock', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);

    const actual = decorator.canPaintRoom(room);
    assert.strictEqual(actual, false)
  });

  it('should be able to decrease amount of paint in stock for a given room', function () {
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);
    decorator.addCan(paintCan1);

    decorator.paintRoom(room);

    const actual = decorator.totalPaintLitres();
    assert.strictEqual(actual, 5)
  });

  xit('should be able to decrease amount of paint in stock when painting a room', function () {
  });

  xit('should be able to remove empty paint cans from stock', function () {

  });

});
