const router = require('express').Router();
const mathController = require('../controllers/mathController');

router.post('/sum', mathController.calculateSum);
router.post('/average', mathController.calculateAverage);
router.post('/count', mathController.countNumbers);

module.exports = router;