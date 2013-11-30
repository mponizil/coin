var $currencies = $('#currencies');
var currencies = ['LTC', 'PPC', 'MEC', 'FTC', 'XPM', 'WDC', 'TRC', 'FRC', 'ANC'];
for (var i in currencies) {
  var currency = currencies[i];
  var $tr = $currencies.find('tr:contains(' + currency + ')');
  console.log($tr.find('.price-btc').text().replace(/ BTC$/, ''));
}
