//adding the sanitized number into the database
const client = require ('./connect.js');
const app = require('./app.js');

const newtelinfo = JSON.parse(app.telinfo);


client.index({

    index : 'Phonenumber',
    type : 'Cleaned_Number',
    body : app.telinfo

}).then (function(resp){
    console.log(resp);
}, function(err){
    console.log(err);
}
);