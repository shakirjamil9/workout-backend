const express = require('express');
const { generatePlan } = require('./generate-plan.controller');
const router = express.Router();

router.post('/', generatePlan);

module.exports = router;
