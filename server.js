
const server = require('http').createServer()
const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

io.on("connection", (socket) => {
    let room = ''
    socket.on("join", roomName => {
        room = roomName
        socket.join(roomName);
    })
    socket.on("play", action => {
        socket.broadcast.to(room).emit("play", action)
    })
})

server.listen(3002)