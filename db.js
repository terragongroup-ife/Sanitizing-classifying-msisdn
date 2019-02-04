const client = require ('./connect.js');

//creating the database

client.indices.create(
    
    {
    _index : "Phonenumber",
}, function(err,resp,status){
    if (err) {
        console.log(err);
    }
    else {
        console.log(resp);
    }
}
);
