var connection = require('../connection.js');

//orm.selectByPrice('price');


var orm = {
    selectByPartyCost: function(tableInput) {
        var s = 'SELECT parties FROM ' + tableInput + ' ORDER BY party_cost ASC;';
        connection.query(s, function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findByName: function(tableInput, buyer_name) {    
        var s = 'SELECT party_name FROM ' + tableInput + ' ORDER BY party_cost';
        connection.query(s, [buyer_name], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    findBuyerByMostAnimal: function(tableOne, tableTwo) {
        var s = 'SELECT buyer_name, COUNT(buyer_name) AS count FROM '+tableOne+' LEFT JOIN '+tableTwo+' ON '+tableTwo+'.buyer_id = '+tableOne+'.id GROUP BY buyer_name ORDER BY count desc LIMIT 1';
        connection.query(s, function(err, result) {
          if (err) throw err;
            console.log(result);
        });
    }
};
    
module.exports = orm;

