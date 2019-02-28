var mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
var Schema = mongoose.Schema;


// add a pupper photo
 var puppySchema = new Schema({
    username: {
        type: String,
        require: true,
 },
    image: {
        type: String, 
        require: true,
    },
    info: String,
});


// add a caption to the pupper photo
var captionSchema = new mongoose.Schema({
    text: String
  }, {
    timestamps: true
  });


// add puppy items to buy
var checklistSchema = new Schema({
    toBuy: {
        type: String,
        enum: ['puppy food', 'treats', 'food and water dishes', 'crate', 'puppy housetraining pads', 'bedding (at least 3 sets)', 'dog gate(s)', 'soft, adjustable collar', '4-to 6-foot leash', '5 or 6 safe chew toys', 'soft-bristle brush', 'gentle puppy shampoo', 'dog nail trimmer']
    },
    vet: {
        type: Date,
        default: function() {
            return new Date().getFullYear() + 1;
         }
        },
 });

// Compile the schema into a model and export it
module.exports = mongoose.model('Puppy', puppySchema);