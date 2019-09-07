const Room = require('./room');
class roomHandler {
    constructor() {
        this.rooms = [];
    }
    addRoom(room) {
        this.rooms.push(new Room(room));
    }
    exists(room) {
        return this.rooms.includes(room);
    }
}

module.exports = roomHandler;