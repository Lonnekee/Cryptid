const express        = require('express');
const mongoose       = require('mongoose'); /* ORM (Object Relational Mapper): map database data to objects */
const bodyParser     = require('body-parser');
const dbUrl          = require('./config/mongodb.config').url;

const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("Successfully connected to MongoDB.");
}).catch(err => {
console.log('Could not connect to MongoDB.');
process.exit();
});

require('./app/routes/index')(app);

const server = app.listen(port, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("App listening at http://%s:%s", host, port)
});

/* TODO Define a schema and create a model with Mongoose:
 *  */
