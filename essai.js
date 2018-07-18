/*var fs = require('fs'); 
var parse = require('csv-parse');

var csv = require('csv');

var obj = csv();


function gamer(name,username,phone,nombre_match,katika) {
 
    this.name = name;
    this.username = username;
    this.phone = phone;
    this.nombre_match = nombre_match;
    this.katika = katika;
};
 

var gamers = [];
 

obj.from.path('gamers.csv').to.array(function (data) {
    for (var index = 0; index < data.length; index++) {
        gamers.push(new gamer(data[index][0], data[index][1], data[index][2],data[index][3],data[index][4]));
    }
    console.log(gamers);
});

var http = require('http');

var server = http.createServer(function (req, resp) {
    resp.writeHead(200, { 'content-type': 'application/json' });
    resp.end(JSON.stringify(Employees));
 
});
 

server.listen(5050);
*/

var fs = require('fs');
var parse = require('csv-parse');
 
  var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "igamer"
});


var inputFile='gamers.csv';
console.log("Liste des joueurs");
 
var parser = parse({delimiter: ';'}, function (err, data) {
    // when all countries are available,then process them
    // note: array element at index 0 contains the row of headers that we should skip
    data.forEach(function(line) {
      // create country object out of parsed fields
      var country = { "name" : line[0]
                    , "username" : line[1]
                    , "phone" : line[2]
                    , "nombre_match" : line[3]
                     ,"nombre_competition" : line[4]
                    , "katika" : line[5]
                    };


     console.log(JSON.stringify(country));

    

  var sql = "INSERT INTO user (name, username ,phone , nombre_match , nombre_competition , katika) VALUES (?,?,?,?,?,?)";
  con.query(sql,[ line[0],line[1],line[2],line[3],line[4],line[5] ], function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
    });    

 
// read the inputFile, feed the contents to the parser
fs.createReadStream(inputFile).pipe(parser);

/*var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "igamer"
});
*/
/*con.connect(function(err) {
 if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO user (name, username ,phone , nombre_match , nombre_competition , katika) VALUES ('Toto', 'Toto23',656582,0,0,'')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
*/