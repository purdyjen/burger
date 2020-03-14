var connection = require("./connection.js");


var orm = {
  selectAll: function(whatToSelect, table) {
    var queryString = "SELECT ?? FROM ??";
    console.log(queryString);
    connection.query(queryString, [whatToSelect, table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(table, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [whatToSelect, table, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(whatToSelect, table, colToSearch, valOfCol) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    connection.query(queryString, [whatToSelect, table, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  
};

module.exports = orm;
