// Smart Strategy Template
// This is 
// Only works with this modded version of Gekko
// https://github.com/crypto49er/moddedgekko

const log = require('../core/log.js');

var strat = {};
var asset = 0;
var currency = 0;
var counter = 0;

// Prepare everything our strat needs
strat.init = function() {
  // your code!
}

// What happens on every new candle?
strat.update = function(candle) {
  // your code!

    // Send message that bot is still working after 24 hours (assuming minute candles)
    counter++;
    if (counter == 1440){
      log.remote(this.name, ' - Bot is still working.');
      counter = 0;
    }

}

// For debugging purposes.
strat.log = function() {
  // your code!


}

// Based on the newly calculated
// information, check if we should
// update or not.
strat.check = function(candle) {
  // your code!


}

// Optional for executing code
// after completion of a backtest.
// This block will not execute in
// live use as a live gekko is
// never ending.
strat.end = function() {
  // your code!
}

// This runs whenever a trade is completed
// as per information from the exchange.
// The trade object looks like this:
// {
//   id: [string identifying this unique trade],
//   adviceId: [number specifying the advice id this trade is based on],
//   action: [either "buy" or "sell"],
//   price: [number, average price that was sold at],
//   amount: [number, how much asset was trades (excluding "cost")],
//   cost: [number the amount in currency representing fee, slippage and other execution costs],
//   date: [moment object, exchange time trade completed at],
//   portfolio: [object containing amount in currency and asset],
//   balance: [number, total worth of portfolio],
//   feePercent: [the cost in fees],
//   effectivePrice: [executed price - fee percent, if effective price of buy is below that of sell you are ALWAYS in profit.]
// }
strat.onTrade = function(trade) {
  
}

// This runs whenever the portfolio changes
// including when Gekko starts up to talk to 
// the exhange to find out the portfolio balance.
// This is how the portfolio object looks like:
// {
//   currency: [number, portfolio amount of currency],
//   asset: [number, portfolio amount of asset],
// }
strat.onPortfolioChange = function(portfolio) {

  // Sell if we start out holding a bag
  // We determine this as currency and asset starts out
  // at 0 before we get the info from the exchange. 
  if (asset == 0 && currency == 0 && portfolio.asset > 0) {
    log.info('Starting with a sell as Gekko probably crashed after a buy')
    //this.advice('short');
  }

  asset = portfolio.asset;
  currency = portfolio.currency;

}

// 
strat.onPortfolioValueChange = function(portfolioValue) {
  log.info('new portfolio value', portfolioValue.balance);
}

// This runs when a commad is sent via Telegram
strat.onCommand = function(cmd) {
  var command = cmd.command;
  if (command == 'start') {
      cmd.handled = true;
      cmd.response = "Hi. I'm Gekko. Ready to accept commands. Type /help if you want to know more.";
  }
  if (command == 'status') {
      cmd.handled = true;
      cmd.response = config.watch.currency + "/" + config.watch.asset +
      "\nPrice: " + currentPrice;
      
  }
  if (command == 'help') {
  cmd.handled = true;
      cmd.response = "Supported commands: \n\n /buy - Buy at next candle" + 
      "\n /sell - Sell at next candle " + 
      "\n /status - Show indicators and current portfolio";
  }
  if (command == 'buy') {
    cmd.handled = true;
    this.advice('long');
  
  }
  if (command == 'sell') {
    cmd.handled = true;
    this.advice('short');
  }
}


module.exports = strat;