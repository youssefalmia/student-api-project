require('dotenv').config()
const mongoose = require('mongoose');

exports.getConnections = () => mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion successful !'))
    .catch(() => console.log('Connexion à MongoDB failed !'));
