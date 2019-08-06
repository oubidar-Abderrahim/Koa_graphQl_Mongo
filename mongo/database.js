const mongoose = require('mongoose');
const greenConsole = '\x1b[32m%s\x1b[0m';

const initDB = () => {
    mongoose.connect(
        "mongodb+srv://koa:koa-graphQL@cluster0-kckd4.mongodb.net/koa-graphql?retryWrites=true&w=majority",
        { useNewUrlParser: true }
    );
    mongoose.connection.once('open', () => {
        console.log(greenConsole, 'Connected to database');
      });
}

module.exports = initDB;
