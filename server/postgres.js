
var pg = require('pg');
//or native libpq bindings
//var pg = require('pg').native

var conString = "postgres://thszliqh:f6_hpjl5OD2XMZ62pWetNaCNOuOcDeGK@heffalump.db.elephantsql.com/thszliqh" //Can be found in the Details page
var client = new pg.Client(conString);
client.connect(function(err) {
  if(err) {
    return console.error('could not connect to postgres', err);
  }
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
    if(err) {
      return console.error('error running query', err);
    }
    console.log(result.rows[0].theTime);
    // >> output: 2018-08-23T14:02:57.117Z
    client.end();
  });
});