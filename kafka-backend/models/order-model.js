var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const Details = new Schema(
    {
        item_id: { type: Number, required: false },
        item_title: { type: String, required: false }, 
        item_price: { type: Number, required: false }, 
        item_quantity: { type: Number, required: false }
    }
)
const Order = new Schema(
    {
        customer_name: { type: String, required: true },
        customer_address: { type: String, required: true },
        customer_phone_number: { type: String, required: true },
        order_total: { type: Number, required: true },
        order_details: {type: [Details] , required: false}
    }
);

module.exports = mongoose.model('orders', Order);

