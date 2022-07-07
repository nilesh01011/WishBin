var mix = require('laravel-mix');
const { min } = require('moment');

// SASS File
mix.sass('resources/CSS/style.scss', 'public/CSS');

// Copy Img and Video files
mix.copyDirectory('resources/img', 'public/img');
mix.copyDirectory('resources/video', 'public/video');

// All Javascripts files
mix.js('resources/JS/main', 'public/JS');
mix.js('resources/JS/Home', 'public/JS');
mix.js('resources/JS/Cart', 'public/JS');
mix.js('resources/JS/ProductsDetails', 'public/JS');
mix.js('resources/JS/PaymentOrders', 'public/JS');
mix.js('resources/JS/Orders', 'public/JS');
mix.js('resources/JS/WishList', 'public/JS');
mix.js('resources/JS/UpdateUserData', 'public/JS');
mix.js('resources/JS/jquery-jvectormap-world-mill-en.js', 'public/JS');
mix.js('resources/JS/chart.js', 'public/JS');
mix.js('resources/JS/dashboardHome.js', 'public/JS');
mix.js('resources/JS/mainAdmin.js', 'public/JS');
mix.js('resources/JS/AdminProductsDetails', 'public/JS');
mix.js('resources/JS/resetPassword', 'public/JS');
mix.js('resources/JS/trackorder', 'public/JS');
