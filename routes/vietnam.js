var express = require('express');
var router = express.Router();

// Route cho "/vietnam"
router.get('/', function(req, res, next) {
    res.send('Trang Vietnam');
});

// Route cho "/vietnam/hanoi"
router.get('/hanoi', function(req, res, next) {
    var hanoi = "Hà Nội";
    var address = "No2, Phạm Văn Bạch";
    res.render('hanoi', { hn: hanoi, diachi: address });
});

// Route cho "/vietnam/hanoi/caugiay"
router.get('/hanoi/caugiay', function(req, res, next) {
    res.send('Trang Cầu Giấy');
});

module.exports = router;
