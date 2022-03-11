class ChatEngine{
    constructor(chatBoxId,userEmail){
        this.chatBox=$(`#${chatBoxId}`);
        this.userEmail=userEmail;
 

       // emitting a connect event
        this.socket=io.connect('http://localhost:5000',{
        withCredentials: true,
        extraHeaders: {
             "my-custom-header": "abcd"
  }
        });

        if(this.userEmail){
            this.connectionHandler();
        }
    }
    connectionHandler(){
        // ask for joining a room
        let self=this;
        this.socket.on('connect',function(){
            console.log('connection established using sockets..!!');

            self.socket.emit('join_room',{
              user_email:self.userEmail,
              chatroom:'codeial'

            });
            self.socket.on('user_joined',function(data){
               console.log('a user joined',data);
            });
        });
    }
}