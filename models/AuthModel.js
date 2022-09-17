const con = require('../config/Database');

const get = (query,x) => {
    con.query(query, function(error, results, fields) {
        if (error) {
            x(1, error)
            return
        } else {
            x(0,results)
        }
    });
}
module.exports.get = get