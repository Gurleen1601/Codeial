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
        this.socket.on('connect',function(){
            console.log('connection established using sockets..!!');
        });
    }
}