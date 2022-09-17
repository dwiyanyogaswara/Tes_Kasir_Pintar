const con = require('../config/Database');
// constructor
const NewAddress = function(data) {
    this.kota_id = data.kota_id;
    this.nama = data.nama;
  };
module.exports.NewAddress = NewAddress

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

const create = (table, newdata, x) => {
    con.query("INSERT INTO "+table+" SET ?", newdata, function(error, results, fields) {
        if (error) {
            x(1, error)
            return
        } else {
            x(0,results)
        }
    });
}
module.exports.create = create

const update = (table, editeddata, whereclause, x) => {
    con.query("UPDATE "+table+" SET ? WHERE "+whereclause, editeddata, function(error, results, fields) {
        if (error) {
            x(1, error)
            return
        } else {
            x(0,results)
        }
    });
}
module.exports.update = update

const del = (table, whereclause, x) => {
    con.query("DELETE FROM "+table+" WHERE "+whereclause, function(error, results, fields) {
        if (error) {
            x(1, error)
            return
        } else {
            x(0,results)
        }
    });
}
module.exports.del = del