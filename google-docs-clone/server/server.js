const io = require('socket.io')(3001, {
    //To allow other connections beside ... to connect to the server
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

io.on("connection", socket => {
    // console.log("connected")

    //Receive the changes from the client
    socket.on('send-changes', delta => {
        // console.log(delta)
        //Send message to everyone connected except us 
        socket.emit("receive-changes", delta)
    })
})