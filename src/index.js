import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import NetworkSettingsController from './controllers/NetworkController';
import cors  from 'cors';


const port = 8080,
      app = express(),
      networkSettings = new NetworkSettingsController();

      
mongoose.set('useFindAndModify', false);      
mongoose.connect('mongodb://localhost/settingsNetwork', { useNewUrlParser: true }, function(err) {    
    if(err) console.log(err);           
});



const db = mongoose.connection;

db.on('error', err => {
    if(err) return console.log('error', err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', networkSettings.index);
app.put('/', networkSettings.update);

app.listen(port);