var Puppy = require('../models/puppy');

module.exports = {
    index,
    new: newPuppyForm,
    create,
    displayPuppies,
    // edit: editPuppies,
    delete: delPuppies



}

function index(req, res) {
  Puppy.find({}, function(err, puppies) {
    res.render('puppies/index', { puppies });
  });

}

// CR[U]D
// function editPuppies(req, res)




// display all created puppies C[R]UD
function displayPuppies(req, res) {
  Puppy.find({}, function(err, puppies) {
    res.render('puppies/index', { puppies: puppies });
  });
  }

  //CRU[D]
  function delPuppies(req, res, next) {
    console.log('trying to delete');
    Puppy.findByIdAndRemove(req.params.id, function(err, puppy) {
        res.redirect('/puppies');
      });
  }


  // Form To Create New Puppy [C]RUD
function newPuppyForm(req, res) {
  res.render('puppies/new');
}

// Function that creates new puppy [C]RUD
function create(req, res) {
  console.log(req.body, 'new puppy alert')
  var puppy = new Puppy(req.body);
  puppy.save(function(err) {
    console.log('HELLO')
    if (err) {
      console.log(err.message)
      return res.render('puppies/new');
    }
    
    res.redirect('/puppies');
  })
  console.log(puppy,'fawkhfawlijfawn')
}







