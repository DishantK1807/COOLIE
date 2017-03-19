var jsonfile   = require('jsonfile')
const file     = './tickets.json'

const mysql    = require('mysql');
const config   = require('./config.json');
var connection = mysql.createConnection(config);

connection.connect(function(err){
    if (err) {
        console.log("Error connecting database ...");
    }
});

function addtckt(tcktid) {
    tickets = [];
    var sql = mysql.format("SELECT * FROM `ticket` WHERE ticketid = ?", tcktid);
    connection.query(sql, function(err, rows, fields) {
    if (!err) {
        jsonfile.readFile(file, function(err, obj) {
            if (Object.keys(obj).length === 0)
                tickets.push(JSON.parse(JSON.stringify(rows[0])));
            else {
                for (var key in obj)
                    tickets.push(obj[key]);
                tickets.push(JSON.parse(JSON.stringify(rows[0])));
            }
            //console.log(tickets);
            jsonfile.writeFile(file, tickets, function (err) {
                if(err)
                    console.error(err);
            });
      });
    }
    else
        console.log('Error while performing Query.');
    });
}


function rmtckt(tcktid){
    tickets = []
    jsonfile.readFile(file, function(err, obj) {
            for (var key in obj)
                if(obj[key]["ticketid"] != tcktid)
                    tickets.push(obj[key]);
        //console.log(tickets);
        jsonfile.writeFile(file, tickets, function (err) {
            if(err)
                console.error(err);
        });
  });
}


function getloc(tcktid) {
    var sql = mysql.format("SELECT track.ticketid, track.rfid, checkpoints.location\
                            FROM track INNER JOIN checkpoints ON \
                            track.checked = checkpoints.checked \
                            WHERE track.ticketid = ?", tcktid);
    connection.query(sql, function(err, rows, fields) {
    if (!err)
        console.log('The solution is: \n', rows);
    else
        console.log('Error while performing Query.');
    });
}

connection.end();
