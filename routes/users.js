const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  currentSocketId: String
})
mongoose
  .connect(
    "mongodb+srv://saurabhrajput9460:saurabh1234@socket.whltuua.mongodb.net/socket?retryWrites=true&w=majority&appName=socket"
  )
  .then((result) => {
    console.log("connected to database");
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = mongoose.model('socket',userSchema)