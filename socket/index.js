module.exports = (io) => {

    io.on('connection', (socket) => {
        console.log('a user connected');
        
        socket.on('disconnect', () => {
            console.log('user disconnected');
        });

        socket.on('room', function (data) {
            socket.join(data.room);
        });
    });
}