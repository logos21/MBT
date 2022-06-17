const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

router.get('/', function (req, res, next) {
    console.log('postion after console')
    console.log(global.N);
    console.log(global.W);
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.get('/Position', function (req, res, next) {
    global.N=[];
    global.N.push(req.param('N1'));
    global.N.push(req.param('N2'));
    global.N.push(req.param('N3'));
    global.W=[];
    global.W.push(req.param('W1'));
    global.W.push(req.param('W2'));
    global.W.push(req.param('W3'));

    console.log(JSON.stringify(global.N));
    console.log(JSON.stringify(global.W));
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

router.get('/RetPosition', function (req, res, next) {
    console.log('postion receive')
    console.log(JSON.stringify(global.N));
    console.log(JSON.stringify(global.W));
    res.json([{N:global.N, W: global.W}])
});

module.exports = router;
