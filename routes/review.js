var express = require('express');
var router = express.Router();

const review_controller = require('../controllers/reviewController');


/* GET write review form. */
router.get('/', review_controller.review_form_get);

/* POST write review form*/
router.post('/', review_controller.review_form_post);

router.get('/thanks', review_controller.review_thanks_get);

module.exports = router;
