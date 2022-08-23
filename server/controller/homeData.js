const CategoryPro = require('../model/categoryProduct');
const Products = require('../model/productsModel');
const SeeMoreModel = require('../model/seeMoreModel');
const User = require('../model/user');
const WishlistItems = require('../model/wishlistModel');
const orders = require('../model/ordersModel');

const homeIndex = async (req, res) => {
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

  // Category and Products Fetch through DBMS
  const MainCategory = await CategoryPro.find();
  // Category End
  // ===============
  const productToys = await Products.findOne({
    title: 'Elephant SoftToy',
  });
  const productElec = await Products.findOne({ category: 'Electronics' });
  const productElecTwo = await Products.findOne({
    title: 'Razer PS5 Headphone',
  });
  const productElecThree = await Products.findOne({
    title: 'Sony Bravia 4K 49Inch',
  });
  const productFur = await Products.findOne({ title: 'Coffee Table' });
  const productCloth = await Products.findOne({ title: 'Sarees Mall' });
  const productClothTwo = await Products.findOne({ title: 'Woolen Sweater' });
  const productBabyCloth = await Products.findOne({ category: 'BabyCloths' });
  const productGroc = await Products.findOne({ category: 'Groceries' });
  const productGame = await Products.findOne({ category: 'Games' });
  const productCompu = await Products.findOne({ category: 'Computer' });
  const productMobile = await Products.findOne({ title: 'Samsung Galaxy S21' });

  const displayProducts = [
    productToys,
    productElec,
    productElecTwo,
    productElecThree,
    productFur,
    productCloth,
    productClothTwo,
    productBabyCloth,
    productGroc,
    productGame,
    productCompu,
    productMobile,
  ];

  // Carta sessions

  let cartSession = req.session.addcart;

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  // SeeMore Category and Products

  const seemoreProToys = await Products.findOne({ title: 'Pikachu SoftToy' });
  const seemoreProElec = await Products.findOne({ title: 'Washing Machine' });
  const seemoreProCloth = await Products.findOne({ title: 'Hooded Jacket' });
  const seemoreProBabyCloth = await Products.findOne({
    title: 'Regular Kurta',
  });
  const seemoreProGro = await Products.findOne({ title: 'Jeera (Cumin) 200g' });
  const seemoreProMobile = await Products.findOne({ title: 'OnePlus 9R' });
  const seemoreProComp = await Products.findOne({ title: 'Intel i9 CPU' });
  const seemoreProMobileTwo = await Products.findOne({ title: 'IPhone 13' });
  const seemoreProFur = await Products.findOne({ title: 'Sofa Side Table' });
  const seemoreProCompTwo = await Products.findOne({ title: 'Logitech Mouse' });
  const seemoreProGroTwo = await Products.findOne({ title: 'Aashirvaad Atta' });
  const seemoreProCompThree = await Products.findOne({
    title: 'Dell Alienware',
  });

  const displayseemoremainpro = [
    seemoreProToys,
    seemoreProElec,
    seemoreProCloth,
    seemoreProBabyCloth,
    seemoreProGro,
    seemoreProMobile,
    seemoreProComp,
    seemoreProMobileTwo,
    seemoreProFur,
    seemoreProCompTwo,
    seemoreProGroTwo,
    seemoreProCompThree,
  ];

  // SeeMore Product and Category End
  // ====================================

  // Banner Links

  const GetvivoZ6 = await Products.findOne({ title: 'Vivo Z6 5G' });

  return res.render('index', {
    admin: adminUser,
    // admin find
    orders: userOrders,

    // user Orders End

    wishlist: wishlistItems,
    // wishlist Items End

    cart: cartSession,
    // Cart sessions End

    cate: MainCategory,
    // Category End
    mainpro: displayProducts,
    // pto: productToys,
    // pel: productElec,
    // pfur: productFur,
    // pclo: productCloth,
    // pbc: productBabyCloth,
    // pco: productCompu,
    // pgo: productGroc,
    // pga: productGame,
    // pmo: productMobile,
    // pcloTwo: productClothTwo,
    // pelTwo: productElecTwo,
    // pelThree: productElecThree,

    // Fire TV ID
    TV: FireTV,
    // dellap
    dellap: DellLap,
    // asusLap
    asuslap: AsusLap,

    seemoremainpro: displayseemoremainpro,

    // seemoretoy: seemoreProToys,
    // seemoreelc: seemoreProElec,
    // seemorecloth: seemoreProCloth,
    // seemorebabycloth: seemoreProBabyCloth,
    // seemoremob: seemoreProMobile,
    // seemorecom: seemoreProComp,
    // seemoregro: seemoreProGro,
    // seemoremobtwo: seemoreProMobileTwo,
    // seemorefur: seemoreProFur,
    // seemorecomtwo: seemoreProCompTwo,
    // seemoregrotwo: seemoreProGroTwo,
    // seemorecomthree: seemoreProCompThree,

    // SeeMore Sections End

    vivoZ6: GetvivoZ6,
  });
};

const wishlistAddController = async (req, res) => {
  const userID = req.user._id;
  let wishlist_Items = req.body;

  let MatchWishListItem = await WishlistItems.findOne({
    wishlistItems: wishlist_Items,
  });

  if (MatchWishListItem) {
    console.log(MatchWishListItem.wishlistItems._id);
  } else {
    const wishlist = await new WishlistItems({
      customerId: userID,
      wishlistItems: wishlist_Items,
    });

    wishlist
      .save()
      .then((result) => {
        // result
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const SearchPageController = async (req, res) => {
  const searchDataItems = req.session.searchData.items.getDate;

  const searchDataValue = req.session.searchData.searchValue.keys;

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

  // CartSession

  let cartSession = req.session.addcart;

  // Fire TV ID

  const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

  // dellap

  const DellLap = await Products.findOne({ title: 'Dell Alienware' });

  // asusLap

  const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

  const productToys = await Products.findOne({ category: 'Toys' });

  res.render('SearchResult', {
    admin: adminUser,
    // cart session
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

    // ====================
    pto: productToys,

    // ========================
    search: searchDataValue,

    searchItems: searchDataItems,
  });
};

const SearchDateController = async (req, res) => {
  let keys = req.params.key;

  let getDate = await Products.find({
    $text: { $search: keys },
  });

  if (!req.session.searchData) {
    req.session.searchData = {
      items: {},
      searchValue: {},
    };
  }

  let searchData = req.session.searchData;

  if (!searchData) {
    searchData.items = { getDate };
    searchData.searchValue = { keys };
  } else {
    searchData.items = { getDate };
    searchData.searchValue = { keys };
  }

  res.send({ session: searchData });
};

const seemoreData = async (req, res) => {
  try {
    let getCategory = await SeeMoreModel.find();

    res.json({ getCategory });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homeIndex,
  wishlistAddController,
  SearchDateController,
  SearchPageController,
  seemoreData,
};
