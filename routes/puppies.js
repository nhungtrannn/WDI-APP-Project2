var express = require('express');
var router = express.Router();
var puppiesCtrl = require('../controllers/puppies');


router.get('/', puppiesCtrl.index);
router.get('/', puppiesCtrl.displayPuppies);
router.get('/new', puppiesCtrl.new);
// router.get('/:id', puppiesCtrl.show);
router.post('/new', puppiesCtrl.create);
router.post('/puppies', puppiesCtrl.addCaption);
router.delete('/puppies/:id', puppiesCtrl.delCaption);

 module.exports = router;
