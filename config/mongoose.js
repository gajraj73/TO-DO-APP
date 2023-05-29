const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gajrajs7340:TODO123@cluster0todo.rrkmcff.mongodb.net/to-do-app?retryWrites=true&w=majority');
const db = mongoose.connection;
// error
db.on('error',console.error.bind(console,'erroe connecting to db'));
// up and running then message
db.once('open',function(){
    console.log('Success fully connected to the database')
})