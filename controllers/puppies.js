var Puppy = require('../models/puppy');

module.exports = {
    index,
    new: newPuppyForm,
    create,
    add,
    displayPuppies,
    addCaption,
    delCaption,
    // show

}

function index(req, res) {
  Puppy.find({}, function(err, puppies) {
    res.render('puppies/index', { puppies });
  });
}

// pupper photo
function displayPuppies(req, res) {
  Puppy.find({})
  .then( function(puppies) {
    console.log(puppies)
    res.render('puppies/index', { puppies: puppies });
  });
  }


  // add caption
  function addCaption(req, res, next) {
    req.user.facts.push(req.body);
    req.user.save(function(err) {
      res.redirect('/puppies');
    });
  }


  // del caption
  function delCaption(req, res, next) {
    Student.findOne({'facts._id': req.params.id}, function(err, student) {
      student.facts.id(req.params.id).remove();
      student.save(function(err) {
        res.redirect('/students');
      });
    });
  }

function newPuppyForm(req, res) {
  res.render('puppies/new');
}

function create(req, res) {
  console.log(req.body, 'new puppy alert')
  var puppy = new Puppy(req.body);
  puppy.save(function(err) {
    console.log('HELLO')
    if (err) {
      console.log(err.message)
      return res.render('puppies/new');
    }
    
    // res.redirect('/puppies');
  });
  console.log(puppy,'fawkhfawlijfawn')
}

// add new item to buy
function add(req, res) {
  var puppy = new Puppy(req.body);
  console.log(req.body);
  puppies.save(function(err) {
    // one way to handle errors
    if (err) return res.render('puppies/new');
    console.log(puppies);
    // for now, redirect right back to new.ejs
    res.redirect('/puppies');
  });
}

// function show(req, res) {
//   Puppy.findById(req.params.id, function (err, puppy) {
//       Ticket.find({checklist: checklist._id}, function(err, tickets) {
//           console.log(tickets);
//           res.render('puppies/show', {
//           title: 'Puppy Information',
//           puppy,
//           tickets
//     });
//   });
// });
// }





