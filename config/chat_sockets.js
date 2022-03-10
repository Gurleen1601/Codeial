module.exports.chatSockets=function(socketServer){
    let io=require('socket.io')(socketServer,{
        cors: {
            origin: "http://localhost:8000",
            methods: ["GET", "POST"],
            allowedHeaders: ["my-custom-header"],
            credentials: true
          }
    });
   
    // receives a connection and emits back that the connection has been established
    io.sockets.on('connection',function(socket){
        console.log('new connection established',socket.id);
        

        socket.on('disconnect',function(){
            console.log('socket disconnected');
        });
    });
}