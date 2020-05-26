const express= require('express')
const app = express()
const server = require("http").createServer(app);
const io = require("socket.io").listen(server)
port = 3000;

io.on("connection", socket =>{
    console.log("a user is connected")  //console if a new user connected
    socket.on("chat message", data =>{ // this is a channel to connect with our app and listed data from our app       
        // io.emit sends the data to our app which is recieved from socket.on
        io.emit("chat message", {  
            "msg": data.msg,
            "userName" : data.userName,
            'users':io.engine.clientsCount
            
        })
    } )

})

server.listen(port ,{forceNode:true},() => { console.log("server running on prot : " + port)})