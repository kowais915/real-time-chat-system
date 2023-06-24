const express = require('express');
const socket = require('socket.io');

const app = express();



// middleware
app.use(express.json());
app.use(express.static('public'));
// app.set('view engine', 'ejs');








const server = app.listen(3000, ()=>{
    console.log("Listening to request at port 3000.")
})

// app.get('/', (req, res)=>{
//     res.sendFile('./public/index.html', {root: __dirname})
// })

const io = socket(server);


io.on('connection', (socket)=>{
    console.log('connection made.')
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data);
    })
})

module.exports = app;



// app.get('/', (req, res)=>{
//     res.status(200).json({
//         msg: "hello, socket!"
//     })
// })

