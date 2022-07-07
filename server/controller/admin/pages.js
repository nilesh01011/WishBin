const Products = require('../../model/productsModel');
const orders = require('../../model/ordersModel');
const moment = require('moment');
const User = require('../../model/user');
const Messages = require('../../model/userContactUs');

function sumOfAll(arr) {
  let sum = 0;
  for (let a of arr) sum += a;
  return sum;
}

const Page = async (req, res) => {
  try {
    const AllMessages = await Messages.find();
    const messages = await Messages.find().limit(3);

    // user orders
    const adminUser = req.user;

    let userOrders = await orders.find({}, null, {
      sort: { createdAt: -1 },
    });

    // totalIncome Amount

    let totalpriceInArray = [];

    userOrders.forEach((ele) => {
      totalpriceInArray.push(ele.totalPrice);
    });

    let SubTotalPrice = sumOfAll(totalpriceInArray);

    // All User length

    let user = await User.find({});

    res.render('api/adminPage/dashboard', {
      orders: userOrders,
      moment: moment,
      totalIncome: SubTotalPrice,
      userLength: user,
      user: adminUser,
      msg: messages,
      allMsg: AllMessages,
    });
  } catch (error) {
    console.log(error);
  }
};

const CustomerPage = async (req, res) => {
  try {
    const messages = await Messages.find().limit(3);
    const AllMessages = await Messages.find();

    let superAdmin;
    const adminUser = req.user;

    if (req.user) {
      let FindAdmin = await User.findOne({ _id: req.user._id });

      superAdmin = FindAdmin.role;
    }

    const AllUser = await User.find({});

    res.render('api/adminPage/customer', {
      admin: superAdmin,
      customer: AllUser,
      user: adminUser,
      msg: messages,
      allMsg: AllMessages,
      moment: moment,
    });
  } catch (error) {
    console.log(error);
  }
};

const OrderPage = async (req, res) => {
  try {
    const messages = await Messages.find().limit(3);
    const AllMessages = await Messages.find();

    const adminUser = req.user;

    // User orders

    let userOrders = await orders.find({}, null, {
      sort: { createdAt: -1 },
    });

    res.render('api/adminPage/orders', {
      orders: userOrders,
      moment: moment,
      user: adminUser,
      msg: messages,
      allMsg: AllMessages,
    });
  } catch (error) {
    console.log(error);
  }
};

const PreviewPage = async (req, res) => {
  try {
    const messages = await Messages.find().limit(3);
    const AllMessages = await Messages.find();

    const adminUser = req.user;

    // ====All Product Fetchs
    const getAllProducts = await Products.find();

    // ====All Electronics Product Fetch

    const getAllElectronics = await Products.find({ category: 'Electronics' });

    // ====All Toys Product Fetch

    const getAllToys = await Products.find({ category: 'Toys' });

    // ====All Cloths Product Fetch

    const getAllCloths = await Products.find({ category: 'Cloths' });

    // ====All BabyCloths Product Fetch

    const getAllBabyCloths = await Products.find({ category: 'BabyCloths' });

    // ====All Mobile Product Fetch

    const getAllMobile = await Products.find({ category: 'Mobiles' });

    // ====All Furniture Product Fetch

    const getAllFurniture = await Products.find({ category: 'Furniture' });

    // ====All Groceries Product Fetch

    const getAllGroceries = await Products.find({ category: 'Groceries' });

    // ====All Games Product Fetch

    const getAllGames = await Products.find({ category: 'Games' });

    // ====All Computer Product Fetch

    const getAllComputer = await Products.find({ category: 'Computer' });

    res.render('api/adminPage/Preview', {
      data: getAllProducts,
      electronics: getAllElectronics,
      toys: getAllToys,
      cloths: getAllCloths,
      babycloths: getAllBabyCloths,
      mobile: getAllMobile,
      furniture: getAllFurniture,
      groceries: getAllGroceries,
      games: getAllGames,
      computer: getAllComputer,
      user: adminUser,
      msg: messages,
      allMsg: AllMessages,
      moment: moment,
    });
  } catch (error) {
    console.log(error);
  }
};

const ProductDetailsPage = async (req, res) => {
  const messages = await Messages.find().limit(3);
  const AllMessages = await Messages.find();

  const adminUser = req.user;

  res.render('api/adminPage/ProductDetails', {
    user: adminUser,
    msg: messages,
    allMsg: AllMessages,
    moment: moment,
  });
};

const UserProfilePage = async (req, res) => {
  const user = req.user;
  const messages = await Messages.find().limit(3);
  const AllMessages = await Messages.find();

  res.render('api/adminPage/userProfile', {
    msg: messages,
    allMsg: AllMessages,
    user,
    moment: moment,
  });
};

const MessagesContactUs = async (req, res) => {
  const messages = await Messages.find().limit(3);
  const AllMessages = await Messages.find();

  res.render('api/adminPage/messages', {
    msg: messages,
    allMsg: AllMessages,
    moment: moment,
  });
};

module.exports = {
  Page,
  CustomerPage,
  OrderPage,
  PreviewPage,
  ProductDetailsPage,
  MessagesContactUs,
  UserProfilePage,
};
