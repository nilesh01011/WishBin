const Products = require('../../model/productsModel');
const WishlistItems = require('../../model/wishlistModel');
const orders = require('../../model/ordersModel');
const User = require('../../model/user');
const userMessage = require('../../model/userContactUs');

const ContactUsPage = async (req, res) => {
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

  //   Cart session
  let cartSession = req.session.addcart;

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  return res.render('ContactUsPage', {
    admin: adminUser,
    // admin find
    orders: userOrders,

    // user Orders End

    wishlist: wishlistItems,
    // wishlist Items End

    cart: cartSession,
    // Cart sessions End

    // Fire TV ID
    TV: FireTV,
    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const contactUsMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      req.flash('emptycontactusmessage', '!!Please enter an empty fields');
      req.flash('previousname', name);
      req.flash('previouemail', email);
      req.flash('previousmessage', message);
      return res.redirect('/contactus');
    }

    const userContactUs = await new userMessage({
      name: name,
      email: email,
      message: message,
    });

    userContactUs
      .save()
      .then((result) => {
        console.log(result);

        req.flash('successfullsend', 'Your messages has been send');

        return res.redirect('/contactus');
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { ContactUsPage, contactUsMessage };
