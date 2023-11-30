const router = require('express').Router();

const exampleController = require('../controllers/example.controller');

router.get("/send", exampleController.Send);

module.exports = router;