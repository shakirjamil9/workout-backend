const express = require('express');
const router = express.Router();
const generatePlan = require('./generate-plan');

router.use('/generate-plan', generatePlan);

module.exports = router;
