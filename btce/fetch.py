#!/usr/bin/python
import btceapi

MY_CURRENCIES = ['LTC', 'PPC', 'MEC', 'FTC', 'XPM', 'WDC', 'TRC', 'FRC', 'ANC', 'NMC']
ALL_PAIRS = ("%s_btc" % (curr.lower()) for curr in MY_CURRENCIES)

connection = btceapi.BTCEConnection()
for pair in ALL_PAIRS:
    try:
        ticker = btceapi.getTicker(pair, connection)
        last = getattr(ticker, 'last')
        # print "%s: %s" % (pair, last)
        print last
    except Exception as e:
        # print "no_pair: %s" % pair
        print ""
