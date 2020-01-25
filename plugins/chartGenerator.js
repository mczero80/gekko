var log = require('../core/log');
var moment = require('moment');
var config = require('../core/util').getConfig();

var Actor = function(next) {
  _.bindAll(this);
}

Actor.prototype.init = function(data) {
};

Actor.prototype.processCandle = function(candle, next) {

  next();
};

Actor.prototype.processAdvice = function(advice) {

};

module.exports = Actor;