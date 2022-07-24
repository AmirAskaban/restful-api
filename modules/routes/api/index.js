const express = require('express');
const router = express.Router();

const apiv1_0 = require('./api-v1.0');
const apiv1_2 = require('./api-v1.2');


router.use('/v1.0',apiv1_0);
router.use('/v1.2',apiv1_2);

module.exports = router;