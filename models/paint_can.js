// Paint Can Constructor and prototypes here

const PaintCan = function (size, volumeLeft = size) {
    this.size = size
    this.volumeLeft = volumeLeft
}

PaintCan.prototype.empty = function () {
    this.volumeLeft = 0
}

module.exports = PaintCan;
