const Products = require('../model/productsModel');
const User = require('../model/user');
const WishlistItems = require('../model/wishlistModel');
const orders = require('../model/ordersModel');

const ElectronicPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const electronicsPro = await Products.find({ category: 'Electronics' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('ElectronicProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    elec: electronicsPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const ToysPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const toysPro = await Products.find({ category: 'Toys' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('ToysProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    toys: toysPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const MobilePage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const mobPro = await Products.find({ category: 'Mobiles' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  // Banner Links

  const GetvivoZ6 = await Products.findOne({ title: 'Vivo Z6 5G' });

  const GetonePlus = await Products.findOne({ title: 'OnePlus 9R' });

  const GetmiPhone = await Products.findOne({ title: 'Xiaomi Mi 11 Ultra' });

  const GetiPhone12PMax = await Products.findOne({
    title: 'IPhone 12 Pro Max',
  });

  const GetSamsungphone = await Products.findOne({
    title: 'Samsung Galaxy S21',
  });

  res.render('MobilePage', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    mob: mobPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,

    // Banner Links
    vivoZ6: GetvivoZ6,
    onePlus: GetonePlus,
    miPhone: GetmiPhone,
    iphone12: GetiPhone12PMax,
    samsungS21: GetSamsungphone,
  });
};

const ClothPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const cloPro = await Products.find({ category: 'Cloths' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('ClothProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    clot: cloPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const BabyClothPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const babyPro = await Products.find({ category: 'BabyCloths' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('BabyClothProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    baby: babyPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const FurniturePage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const furPro = await Products.find({ category: 'Furniture' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('FurnitureProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    furn: furPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const GroceriesPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const groPro = await Products.find({ category: 'Groceries' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('GroceriesPage', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    groc: groPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const GamePage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const gamPro = await Products.find({ category: 'Games' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('GameProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    game: gamPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

const ComputerPage = async (req, res) => {
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

  // Cart session

  let cartSession = req.session.addcart;

  // Products Fetchs

  const comPro = await Products.find({ category: 'Computer' });

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  res.render('ComputerProducts', {
    admin: adminUser,
    // cart session
    cart: cartSession,
    // wishlists
    wishlist: wishlistItems,
    // user Orders
    orders: userOrders,
    // Products
    comp: comPro,

    // Fire TV ID
    TV: FireTV,

    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,
  });
};

module.exports = {
  ElectronicPage,
  ToysPage,
  MobilePage,
  ClothPage,
  BabyClothPage,
  FurniturePage,
  GroceriesPage,
  GamePage,
  ComputerPage,
};
