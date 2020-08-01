var express = require('express');
var router = express.Router();

/* GET home page. */

const indexController = require("../controllers/indexController");
const postsController = require('../controllers/postsController')

router.get('/', postsController.allPosts);
router.get('/login', indexController.signinView);
router.get('/signup', indexController.signupView);



// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
