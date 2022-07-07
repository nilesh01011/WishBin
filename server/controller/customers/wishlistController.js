const Products = require('../../model/productsModel');
const User = require('../../model/user');
const WishlistItems = require('../../model/wishlistModel');
const orders = require('../../model/ordersModel');

const wishlistPageController = async (req, res) => {
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

  // cartSession
  let cartSession = req.session.addcart;

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  // Fire TV ID
  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  return res.render('WishListPage', {
    admin: adminUser,

    // cart session
    cart: cartSession,
    // Fire TV ID
    TV: FireTV,
    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
    // laptop End

    // WishList Items
    wishlist: wishlistItems,

    users: userFind,

    // user Orders
    orders: userOrders,
  });
};

const wishlistItemsDeleteController = async (req, res) => {
  let DeleteWishList = req.params.id;

  const WishListItemsDelete = await WishlistItems.deleteOne({
    _id: DeleteWishList,
  });

  res.send({ WishListItemsDelete });
};

module.exports = { wishlistPageController, wishlistItemsDeleteController };
