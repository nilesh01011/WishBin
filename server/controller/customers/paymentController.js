const User = require('../../model/user');

const orders = require('../../model/ordersModel');

const paymentPageController = async (req, res) => {
  let cartSession = req.session.addcart;

  //  User Details

  const userFind = await User.findOne({ _id: req.user });

  // Cart count

  res.render('ProcessedToBuyPage', {
    userData: userFind,
    cart: cartSession,
  });
};

const paymentController = async (req, res) => {
  const userID = req.user._id;

  let cartSession = req.session.addcart;

  const { phone, address, cardnumber, cardexpdate, cardcvv, name } = req.body;

  if (!phone || !address || !cardnumber || !cardexpdate || !cardcvv) {
    req.flash('paymenterror', 'All fields are required');
    res.redirect('/paymentpage');
  }

  if (cardnumber < 16) {
    req.flash('cardnumber', '!Your Card Number invalid');
    res.redirect('/paymentpage');
  }

  let Items = [];

  for (let list of Object.values(cartSession.items)) {
    Items.push(list);
  }

  // cartSession.items
  let order;

  Items.forEach(async (ele) => {
    order = await new orders({
      customerId: userID,
      items: ele,
      phone: phone,
      address: address,
      totalPrice: ele.totalItemPrice,
      name: name,
    });

    order
      .save()
      .then((result) => {
        req.flash('success', 'Order Placed Successfully...');

        delete req.session.addcart;

        // Emitter emit event

        const eventEmitter = req.app.get('eventEmitter');
        eventEmitter.emit('orderPlaced', result);

        return res.redirect('/orderpage');
      })
      .catch((err) => {
        req.flash('error', 'Something went wrong');
        console.log(err);
        return res.redirect('/paymentpage');
      });
  });
};

module.exports = { paymentPageController, paymentController };
