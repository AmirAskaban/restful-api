const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json('welcome to Api');
});

module.exports = router;