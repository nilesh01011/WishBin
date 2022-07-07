const Products = require('../../model/productsModel');
const orders = require('../../model/ordersModel');
const User = require('../../model/user');
const moment = require('moment');
const WishlistItems = require('../../model/wishlistModel');

const orderPage = async (req, res) => {
  // User orders
  let userOrders;
  let adminUser;

  if (req.user) {
    userOrders = await orders.find({ customerId: req.user._id }, null, {
      sort: { createdAt: -1 },
    });

    let FindAdmin = await User.findOne({ _id: req.user._id });

    adminUser = FindAdmin.role;
  }

  // User wishlist
  let wishlistItems;

  if (req.user) {
    wishlistItems = await WishlistItems.find({
      customerId: req.user._id,
    });
  }

  const userFind = await User.findOne({ _id: req.user });

  // Carts Details
  let cartSession = req.session.addcart;

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  // Fire TV ID
  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  return res.render('OrderPage', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // Fire TV ID
    TV: FireTV,
    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
    // user Orders
    orders: userOrders,
    users: userFind,
    moment: moment,

    // WishList Items
    wishlist: wishlistItems,
  });
};

const orderTracker = async (req, res) => {
  try {
    // User orders
    let userOrders;
    let adminUser;

    if (req.user) {
      userOrders = await orders.find({ customerId: req.user._id }, null, {
        sort: { createdAt: -1 },
      });

      let FindAdmin = await User.findOne({ _id: req.user._id });

      adminUser = FindAdmin.role;
    }

    let orderProduct = await orders.findOne({ _id: req.query.orderId });

    // User wishlist
    let wishlistItems;

    if (req.user) {
      wishlistItems = await WishlistItems.find({
        customerId: req.user._id,
      });
    }

    const userFind = await User.findOne({ _id: req.user });

    // Carts Details
    let cartSession = req.session.addcart;

    // dellap

    const DellLap = await Products.findOne({ title: 'Dell Alienware' });

    // asusLap

    const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

    // Fire TV ID
    const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

    if (orderProduct) {
      res.render('TrackOrderPage', {
        admin: adminUser,
        // cart session
        cart: cartSession,
        // Fire TV ID
        TV: FireTV,
        // dellap
        dellap: DellLap,
        // asusLap
        asuslap: AsusLap,
        // user Orders
        orders: userOrders,
        users: userFind,
        moment: moment,

        // WishList Items
        wishlist: wishlistItems,

        // order Details
        Items: orderProduct,
      });
    } else {
      res.redirect('/orderpage');
    }
  } catch (error) {
    console.log('Track Order Page Error', error);
  }
};

module.exports = { orderPage, orderTracker };
