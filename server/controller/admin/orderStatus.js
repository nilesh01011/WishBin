const Products = require('../../model/productsModel');
const orders = require('../../model/ordersModel');
const moment = require('moment');
const User = require('../../model/user');
const Messages = require('../../model/userContactUs');

const orderStatus = async (req, res) => {
  try {
    // User orders

    try {
      orders.updateOne(
        { _id: req.body.orderId },
        { status: req.body.status },
        (err, data) => {
          if (err) {
            res.redirect('/api/adminPage/orders');
          }

          // Emitter emit event

          const eventEmitter = req.app.get('eventEmitter');
          eventEmitter.emit('orderUpdated', {
            id: req.body.orderId,
            status: req.body.status,
          });

          res.redirect('/api/adminPage/orders');
        }
      );
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = orderStatus;
