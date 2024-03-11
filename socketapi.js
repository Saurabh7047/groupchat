const io = require( "socket.io" )();
const socketModel =  require('./routes/users')
const socketapi = {
    io: io
};

// Add your socket.io logic here!
io.on( "connection", function( socket ) {
    console.log( "A user connected" );
    socket.on('newMsg',msg=>{
        console.log(msg)
        socket.broadcast.emit('newMsg',msg)
    })
});
io.on( "connection", async function( socket ) {
    await socketModel.create({ currentSocketId: socket.id })
    console.log( socket.id );
    var allsocketId = await socketModel.find()
    allsocketId = allsocketId.reverse()[ 1 ]
    if(allsocketId){
        console.log(allsocketId)
        socket.to(allsocketId.currentSocketId).emit('newMsg','hello from server')
    }
   
});
// end of socket.io logic

module.exports = socketapi;