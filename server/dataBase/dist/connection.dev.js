"use strict";

require('dotenv').config();

var mongoose = require('mongoose');

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            mongoose.connect(process.env.DB, {
              useNewUrlParser: true,
              useUnifiedTopology: true
            }).then(function () {
              return console.log('Connect Successfull...');
            })["catch"](function (err) {
              return console.log(err);
            });
          } catch (err) {
            console.log(err);
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = connectDB;