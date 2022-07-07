const { parse } = require('dotenv');
const Products = require('../../model/productsModel');
const WishlistItems = require('../../model/wishlistModel');
const orders = require('../../model/ordersModel');
const User = require('../../model/user');

const cart = async (req, res) => {
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

  // CartSessions
  let cartSession = req.session.addcart;

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  // Fire TV ID
  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  return res.render('CartPage', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
    // QTY in DBMS

    // WishList Items
    wishlist: wishlistItems,

    // user Orders
    orders: userOrders,
  });
};

const AddToCart = async (req, res) => {
  // Cart session store Structures
  // let cart = {
  //   items: {
  //     productID : { item: productObject, qty:0 }
  //   },
  //   totalQTY: 0,
  //   totalPrice:0
  // }

  // First times add to carts
  if (!req.session.addcart) {
    req.session.addcart = {
      items: {},
      totalQTY: 0,
      totalPrice: 0,
    };
  }

  // Check if items dose not there in carts

  let cartSession = req.session.addcart;

  // console.log(req.body);

  // cartSession Add

  if (!cartSession.items[req.body._id]) {
    cartSession.items[req.body._id] = {
      item: req.body,
      qty: 1,
      totalItemPrice: req.body.price,
    };
    cartSession.totalQTY = cartSession.totalQTY + 1;

    cartSession.totalPrice = cartSession.totalPrice + req.body.price;
  } else {
    cartSession.items[req.body._id].qty =
      cartSession.items[req.body._id].qty + 1;

    cartSession.items[req.body._id].totalItemPrice =
      cartSession.items[req.body._id].totalItemPrice + req.body.price;

    cartSession.totalQty = cartSession.totalQty + 1;

    cartSession.totalPrice = cartSession.totalPrice + req.body.price;
  }

  return res.send({ totalQTY: cartSession.totalQTY, session: cartSession }); // Total Cart Items
};

// ==================================================================
// ==================================================================

// Update cart Quantity to the cart

function sumOfAll(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  return sum;
}

const UpdateCart = (req, res) => {
  let cartSession = req.session.addcart;

  let productItemQty = req.body;

  let GetQty = parseInt(productItemQty.qty); // User selected GetQTY

  let GetID = productItemQty.ItemsID; // Product Id

  let total_Price = [];

  for (let product of Object.values(cartSession.items)) {
    if (product.item._id == GetID) {
      if (product.qty < GetQty) {
        // by default 1
        product.qty = GetQty;

        product.totalItemPrice = product.item.price * product.qty;
      } else {
        product.qty = GetQty;

        product.totalItemPrice = product.qty * product.item.price;
      }
    }

    total_Price.push(product.totalItemPrice);
  }

  cartSession.totalPrice = sumOfAll(total_Price);

  const SubTotalPrice = cartSession.totalPrice;

  res.send({ SubTotalPrice });
};

// ===================================================

// Delete items from cart

const removeitems = (req, res) => {
  let DeleteThisID = req.params.id;

  let cartSession = req.session.addcart;

  let GetID = cartSession.items;

  for (let id of Object.values(GetID)) {
    delete GetID[DeleteThisID];

    if (id.item._id === DeleteThisID) {
      if (id.qty > 1 && id.item.QTY > id.qty) {
        cartSession.totalQTY = cartSession.totalQTY - 1;

        cartSession.totalPrice = cartSession.totalPrice - id.totalItemPrice;
      } else {
        cartSession.totalQTY = cartSession.totalQTY - id.qty;

        cartSession.totalPrice = cartSession.totalPrice - id.totalItemPrice;
      }
    }
  }

  res.send({ DeleteThisID });
};

module.exports = {
  cart,
  AddToCart,
  UpdateCart,
  removeitems,
};
