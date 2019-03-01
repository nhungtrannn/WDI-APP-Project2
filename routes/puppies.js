var express = require('express');
var router = express.Router();
var puppiesCtrl = require('../controllers/puppies');

// All routes on this page are after http://localhost:3000/puppies

router.get('/', puppiesCtrl.index);
router.get('/', puppiesCtrl.displayPuppies);
router.get('/new', puppiesCtrl.new);
router.post('/new', puppiesCtrl.create);
// router.put('/:id/edit', puppiesCtrl.edit);
router.delete('/:id/delete', puppiesCtrl.delete);

 module.exports = router;
