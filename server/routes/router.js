require('dotenv').config();

const cartController = require('../controller/customers/cartController');
const orderController = require('../controller/customers/orderController');
const wishlistController = require('../controller/customers/wishlistController');
const home = require('../controller/homeData');
const {
  UserRegis,
  UserLogin,
  UserLogout,
} = require('../controller/UsersData/users');

const Products = require('../model/productsModel');

const WishlistItems = require('../model/wishlistModel');
const orders = require('../model/ordersModel');

const adminPage = require('../controller/admin/pages');

const orderStatus = require('../controller/admin/orderStatus');

const User = require('../model/user');
const payment = require('../controller/customers/paymentController');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Pages = require('../controller/Products');
const bcrypt = require('bcrypt');
const ContactUs = require('../controller/customers/contactUs');
const forgetPassword = require('../controller/UsersData/resetPassword');

const Message = require('../model/userContactUs');

function initRoutes(app) {
  // Admin Dashboard
  app.get('/api/adminPage/dashboard', admin, adminPage.Page);

  app.get('/api/adminPage/messages', admin, adminPage.MessagesContactUs);

  app.post('/api/adminPage/messages', admin, (req, res) => {
    Message.findByIdAndDelete({ _id: req.body.msgId }, (err, data) => {
      if (err) {
        console.log(err);
      }

      res.redirect('/api/adminPage/messages');
    });
  });

  app.get('/api/adminPage/customer', admin, adminPage.CustomerPage);

  app.post('/api/adminPage/customer', admin, (req, res) => {
    try {
      User.updateOne(
        { _id: req.body.userId },
        { role: req.body.userRole },
        (err, data) => {
          if (err) {
            console.log(err);
            res.redirect('/api/adminPage/customer');
          }
          res.redirect('/api/adminPage/customer');
        }
      );
    } catch (error) {
      console.log(error);
    }
  });

  app.get('/api/adminPage/orders', admin, adminPage.OrderPage);

  app.get('/api/adminPage/preview', admin, adminPage.PreviewPage);

  app.get('/api/adminPage/productdetails', admin, adminPage.ProductDetailsPage);

  app.post('/api/adminPage/orders', admin, orderStatus);

  app.get('/api/adminPage/userprofile', admin, adminPage.UserProfilePage);

  // ====== Search API

  app.get('/searchresult', home.SearchPageController);

  app.post('/searchresult/:key', home.SearchDateController);

  // =====================================================

  app.get('/', home.homeIndex);

  app.get('/electronicproduct', Pages.ElectronicPage);

  app.get('/toysproducts', Pages.ToysPage);

  app.get('/mobileproducts', Pages.MobilePage);

  app.get('/clothproducts', Pages.ClothPage);

  app.get('/babyclothproducts', Pages.BabyClothPage);

  app.get('/furnitureproducts', Pages.FurniturePage);

  app.get('/groceriesproducts', Pages.GroceriesPage);

  app.get('/gameproducts', Pages.GamePage);

  app.get('/computerproducts', Pages.ComputerPage);

  // DB = mongodb://localhost:27017/ECommerce

  // ===========================WishList Details=========================

  app.get('/wishlistpage', auth, wishlistController.wishlistPageController);

  app.delete(
    '/wishlist-delete/:id',
    wishlistController.wishlistItemsDeleteController
  );

  app.post('/wishlist-add', home.wishlistAddController);

  // ===========================WishList Details End======================

  app.get('/orderpage', auth, orderController.orderPage);

  app.get('/paymentpage', payment.paymentPageController);

  app.post('/orders', payment.paymentController);

  app.get('/ordertrack', orderController.orderTracker);

  app.post('/ordertrack/:id', async (req, res) => {
    try {
      let orderProducdID = req.body;

      const orderIDFetch = await orders.findOne({ _id: orderProducdID });

      res.send({ orderItems: orderIDFetch });
    } catch (error) {
      console.log(error);
    }
  });

  app.delete('/orderpageproductdelete/:id', async (req, res) => {
    let DeleteOrder = req.params.id;

    try {
      const fetchOrder = await orders.findByIdAndDelete({ _id: DeleteOrder });
    } catch (error) {
      console.log(error);
    }
  });

  // ===========================Get Product Details=========================

  app.get('/productdetails', async (req, res) => {
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

    // Cart count

    let cartSession = req.session.addcart;

    // dellap

    const DellLap = await Products.findOne({ title: 'Dell Alienware' });

    // asusLap

    const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

    // Fire TV ID
    const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

    res.render('Products_Details', {
      admin: adminUser,
      // cart session
      cart: cartSession,
      // Fire TV ID
      TV: FireTV,
      // dellap
      dellap: DellLap,
      // asusLap
      asuslap: AsusLap,
      // wishlists
      wishlist: wishlistItems,
      // user Orders
      orders: userOrders,
    });
  });

  // ==========================UserProfiles Pages===========================

  app.get('/userprofile', async (req, res) => {
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

    const UserImages = userFind.userImage;

    // Cart count

    let cartSession = req.session.addcart;

    // dellap

    const DellLap = await Products.findOne({
      title: 'Dell Alienware',
    });

    // asusLap

    const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

    // Fire TV ID
    const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

    res.render('UserProfile', {
      admin: adminUser,
      // cart session
      cart: cartSession,
      // Fire TV ID
      TV: FireTV,
      // dellap
      dellap: DellLap,
      // asusLap
      asuslap: AsusLap,
      // User Data
      userData: userFind,
      userProfile: UserImages,
      // Wishlist
      wishlist: wishlistItems,
      // user Orders
      orders: userOrders,
    });
  });

  app.get('/userdataupdate', async (req, res) => {
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

    // console.log(userFind);

    // Cart count

    let cartSession = req.session.addcart;

    // dellap

    const DellLap = await Products.findOne({
      title: 'Dell Alienware',
    });

    // asusLap

    const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

    // Fire TV ID
    const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

    res.render('UserDataUpdate', {
      admin: adminUser,
      // cart session
      cart: cartSession,
      // Fire TV ID
      TV: FireTV,
      // dellap
      dellap: DellLap,
      // asusLap
      asuslap: AsusLap,
      // User Data
      userData: userFind,
      // Wishlist
      wishlist: wishlistItems,
      // user Orders
      orders: userOrders,
    });
  });

  app.post('/userdataupdate', async (req, res) => {
    let username = req.body.name;
    let userphone = req.body.phone;
    let useraddress = req.body.address;
    let userOldPassword = req.body.password;
    let userNewPassword = req.body.newpassword;
    let userID = req.user._id;

    try {
      // Password Compare with req.user.password

      // Empty password compare

      if (!userOldPassword && !userNewPassword) {
        const updataUserData = await User.findOneAndUpdate(
          { _id: userID },
          {
            $set: {
              name: username,
              phone: userphone,
              address: useraddress,
            },
          },
          { new: true },
          (err, data) => {
            if (err) {
              console.log(err);
            } else {
              // console.log('=================', data);
              res.redirect('/userprofile');
            }
          }
        );
      }

      // user set input and compare with bcrypt

      const OldPasswordCompare = await bcrypt.compare(
        userOldPassword,
        req.user.password
      );

      if (req.body.password) {
        if (OldPasswordCompare == true) {
          if (!userNewPassword) {
            req.flash('emptypassword', '!!Please enter a password');
            res.redirect('/userdataupdate');
          } else {
            // Hashing password

            let NewPassword = await bcrypt.hash(userNewPassword, 10);
            const updataUserData = await User.findOneAndUpdate(
              { _id: userID },
              {
                $set: {
                  name: username,
                  phone: userphone,
                  address: useraddress,
                  password: NewPassword,
                },
              },
              { new: true },
              (err, data) => {
                if (err) {
                  console.log(err);
                } else {
                  // console.log('=================', data);
                  res.redirect('/userprofile');
                }
              }
            );
          }
        } else {
          console.log('Password input wrong');
          req.flash('invalidpassword', '!!Invalid password input');
          res.redirect('/userdataupdate');
        }
      } else {
        console.log('Password input wrong');
        req.flash('invalidpassword', '!!Invalid password input');
        res.redirect('/userdataupdate');
      }
    } catch (error) {
      console.log(error);
    }
  });

  // ===========================Cart Pages=========================

  app.get('/cartpage', cartController.cart);

  app.post('/add-cartpage', cartController.AddToCart);

  app.patch('/update-product-cartpage/:id', cartController.UpdateCart);

  app.delete('/remove-cartpage/:id', cartController.removeitems);

  // ===============================Login and Registers=========================

  // Registers Users Data

  app.post('/register', UserRegis);

  app.get('/register', (req, res) => {
    res.render('RegisterPage');
  });

  // Login User Data

  app.post('/login', UserLogin);

  app.get('/login', (req, res) => {
    res.render('LoginPage');
  });

  app.get('/forgetpassword', forgetPassword.forgetPasswordPage);

  // const currentDateTime = new Date();

  app.post('/forgetpassword', forgetPassword.forgetPasswordPost);

  // reset password

  app.get('/resetpassword', forgetPassword.resetPasswordPage);

  app.post('/resetpassword', forgetPassword.resetPasswordPost);

  // user Logouts

  app.post('/logout', UserLogout);

  // Contact Us Page

  app.get('/contactus', ContactUs.ContactUsPage);

  app.post('/contactus', ContactUs.contactUsMessage);

  // Error
  app.get('*', async (req, res) => {
    let adminUser;

    if (req.user) {
      let FindAdmin = await User.findOne({ _id: req.user._id });

      adminUser = FindAdmin.role;
    }

    // dellap

    const DellLap = await Products.findOne({ title: 'Dell Alienware' });

    // asusLap

    const AsusLap = await Products.findOne({ title: 'ASUS ROG Laptop' });

    // Fire TV ID
    const FireTV = await Products.findOne({ title: 'Sony Bravia 4K 49Inch' });

    res.render('Error', {
      admin: adminUser,

      // Fire TV ID
      TV: FireTV,
      // dellap
      dellap: DellLap,
      // asusLap
      asuslap: AsusLap,
    });
  });
}

module.exports = initRoutes;
