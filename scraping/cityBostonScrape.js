var request = require('request');
var cheerio = require('cheerio');
/*
 * URL to fetch data for all days
 */
var url = 'http://www.cityofboston.gov/publicworks/sweeping/?streetname=&weekofmonth=week1&weekofmonth=week2&weekofmonth=week3&weekofmonth=week4&weekofmonth=week5&dayofweek=sunday&dayofweek=monday&dayofweek=tuesday&dayofweek=wednesday&dayofweek=thursday&dayofweek=friday&dayofweek=saturday&Neighborhood='
request(url, function(err, resp, body) {
  if (err)
    throw err;

  $ = cheerio.load(body);
  /*
   * tblsweeping - table which consists the main content
   */
  $('#tblsweeping').find('tr').each(function() {
    var street_name = $(this).find('td:nth-child(1)').text();
    var district = $(this).find('td:nth-child(2)').text();
    var side = $(this).find('td:nth-child(3)').text();
    var section = $(this).find('td:nth-child(4)').text();
    var schedule = $(this).find('td:nth-child(5)').text();
    console.log('Street name '+street_name+' District '+district+' side '+side+' section '+section+' schedule '+schedule);
  });
});
