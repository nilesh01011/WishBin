const Products = require('../../model/productsModel');
const orders = require('../../model/ordersModel');
const moment = require('moment');
const User = require('../../model/user');
// const Messages = require('../../model/userContactUs');

const orderStatus = async (req, res) => {
  try {
    // User orders

    try {
      orders.updateOne(
        { _id: req.body.orderId },
        { status: req.body.status },
        (err, data) => {
          if (err) {
            res.render('/api/adminPage/orders');
          }

          // Emitter emit event

          const eventEmitter = req.app.get('eventEmitter');
          eventEmitter.emit('orderUpdated', {
            id: req.body.orderId,
            status: req.body.status,
          });

          res.render('/api/adminPage/orders');
        }
      );
    } catch (error) {
      console.log(error);
    }

    let userOrders = await orders.find({}, null, {
      sort: { createdAt: -1 },
    });

    res.render('api/adminPage/orders', {
      orders: userOrders,
      moment: moment,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = orderStatus;
