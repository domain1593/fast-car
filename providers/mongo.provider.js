var mongoose = require('mongoose');
var environment = require('../environments/production');

function fastCarDBConnection() {

    var mongoDB = environment.mongo_url;
    var db = mongoose.connection;
    mongoose.connection.close();
   
    mongoose.connect(mongoDB,
        {
            useNewUrlParser: true, useUnifiedTopology: true
        });

    mongoose.Promise = global.Promise;
 
    db.on('connected', () => { console.log('succesful conection') });
    db.on('error', console.error.bind(console, 'MongoDB connection error:'));
};

exports.fastCar_db_connect = fastCarDBConnection();
