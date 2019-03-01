var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;


// add a pupper photo
 var puppySchema = new Schema({
    name: {
        type: String,
        require: true,
 },
    image: {
        type: String, 
        require: true,
    },
    caption: { 
        type: String,
    },
    age: {
        type: Number,
    }

});



// Compile the schema into a model and export it
module.exports = mongoose.model('Puppy', puppySchema);