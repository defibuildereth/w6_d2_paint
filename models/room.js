// Room Constructor and prototypes here

const Room = function (area, areaLeft = area) {
    this.area = area
    this.areaLeft = areaLeft
    this.painted = false
}

Room.prototype.canBePainted = function () {
    return !this.painted
}

module.exports = Room;
