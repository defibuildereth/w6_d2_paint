// Decorator Constructor and prototypes here

const Decorator = function () {
    this.stock = []
}

Decorator.prototype.addCan = function (can) {
    this.stock.push(can)
}

Decorator.prototype.totalPaintLitres = function () {
    let total = 0;
    for (can of this.stock) {
        total += can.volumeLeft
    }
    return total
}

Decorator.prototype.canPaintRoom = function (room) {
    if (this.totalPaintLitres() >= room.area) {
        return true
    } else {
        return false
    }
}

Decorator.prototype.paintRoom = function (room) {
    if (this.canPaintRoom(room) === true) {
        for (can of this.stock) {
            if (can.volumeLeft === 0) {
                
            } else if (can.volumeLeft <= room.areaLeft) {
                room.areaLeft -= can.volumeLeft;
                can.volumeLeft = 0;
            } else if (can.volumeLeft > room.areaLeft) {
                can.volumeLeft -= room.areaLeft;
                room.areaLeft = 0;
            }
            
        }
    }
}

module.exports = Decorator;
