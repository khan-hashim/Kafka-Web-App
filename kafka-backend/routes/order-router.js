var express = require('express');

var OrderCtrl = require('../controllers/order-ctrl');

var router = express.Router();

//router.post('/order', OrderCtrl.createOrder);
//router.put('/order/:id', OrderCtrl.updateOrder);

router.post('/', OrderCtrl.createOrder);
router.put('/:id', OrderCtrl.updateOrder);


router.get("/", function(req, res, next) {
    res.send("order API is working properly");
});


module.exports = router;