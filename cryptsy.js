var currencies = ['LTC', 'PPC', 'MEC', 'FTC', 'XPM', 'WDC', 'TRC', 'FRC', 'ANC'];
for (var i in currencies) {
  var currency = currencies[i];
  console.log(currency, $('.moduletable-btc-markets a:contains(' + currency + '/BTC) span').text())
}
