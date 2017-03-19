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
                tickets = tickets + JSON.stringify(rows);
            else {
                tickets.push(obj);
                tickets = tickets + JSON.stringify(rows);
            }
            console.log(tickets);
      });
    }
    else
        console.log('Error while performing Query.');
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


addtckt(1);
connection.end();
