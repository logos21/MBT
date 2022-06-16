const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
    let {N, W} = req.query;

    console.log(N);
    console.log(W);
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

module.exports = router;
