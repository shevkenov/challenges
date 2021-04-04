const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 5000

app.use('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('user is connected via socket ' + socket.id);

    socket.on('chat message', (msg) => {
        console.log({server: socket.id});
        socket.emit('chat message', msg)
        
    })

    socket.on('disconnect', () => {
        console.log('user disconnected ' + socket.id);
    
    })
});


server.listen(PORT, () => console.log('Server is listening on port ' + PORT))
