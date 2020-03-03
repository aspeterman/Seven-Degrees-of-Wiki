// // var request = require('request');
// // var getAllCategories = require('./src/helpers/getAllPages.js')
// // var faker = require('faker')
// // var argv = require('yargs').argv;
// // const express = require('express');
// // const bodyParser = require('body-parser');

// // const app = express()

// // app.use(bodyParser.json());
// // // app.use('/', express.static(path.resolve(__dirname, '../client/src')));

// // // app.get('/', (req, res) => {
// // //   console.log('Getting some items:')
// // //   getAllCategories.getCategories()
// // //     .then(products => res.json(products))
// // //     .catch(console.error)
// // // });

// // var categories = ['cartoon', 'books', 'politics', 'actors']
// // var idx = Math.floor(Math.random(categories.length)* categories.length)
// // var query = categories[idx]
// // // var query = argv.q || 'batman';
// // // argv.q = 'cartoon'
// // // console.log(argv.q)
// // // q = 'cartoon'
// // var url = `https://en.wikipedia.org/w/api.php?action=opensearch&search="+ ${query} +"&format=json`

// // request(url, (err, response, body) => {
// //     if (err) {
// //         var error = "cannot connect to the server";
// //         console.log(error);
// //     } else {
// //         var wiki = JSON.parse(body);
// //         // var idx = Math.floor(faker.random.number({min:1, max:100}))
// //         // var idx2 = Math.floor(faker.random.number({min:2, max:100}))
// //         for (var i = 0; i < wiki[1].length; i++) {
// //             var message = `You searched for ${wiki[1][i]}: And these are the details - ${wiki[2][i]} Follow this link to read more - ${wiki[3][i]}` + "\n";
// //             console.log(message);
// //         }
// //         var result=[];
// //         for(var i = 1; i < wiki[2].length; i++) {
// //           result.push(wiki[3][i])
// //           var message = `look at ${wiki[1][i]}`
// //           console.log(message)
// //         }
// //         console.log(result[idx])
// //       }

// // });

// // app.listen(8000, () => {
// //   console.log(`listening on PORT 8000`);
// // });

// var express = require('express');
// var path = require('path');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// const passport = require("passport");
// const users = require("./routes/user");

// var app = express();

// // view engine setup
// // app.set('views', path.join(__dirname, 'views'));
// // app.set('view engine', 'jade');

// // uncomment after placing your favicon in /public
// //app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.resolve(__dirname, 'public')));

// // Passport middleware
// app.use(passport.initialize());
// // Passport config
// require("../config/passport")(passport);
// // Routes

// //API Service
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/27017', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() =>  console.log('connection succesful'))
// .catch((err) => console.error(err));
// var Streams = require('../db/models/Streams.js');

// var router = express.Router();
// app.use("/api/users", users);
// app.use('/api', router); //api root
// app.use('/api/streams', router); //streams collection


// //root message
// app.post('/api', function(req, res) {
//   res.json({ message: 'API Root!' });
// });

// //post a new stream
// app.post('/api/streams', function(req, res) {
//   var stream = new Streams();
//   stream.image = req.param('title');
//   stream.name = req.param('description');
//   stream.viewers = req.param('url');

//   stream.save(function(err) {
//       if (err) {
//         res.send(err);
//       }

//       res.json({ message: 'Stream created. Check Robo 3T!' });
//   });
// });

// //get all streams
// app.get('/api/streams', function(req, res) {
//   Streams.find(function(err, streams) {
//     if (err) {
//       res.send(err);
//     }

//     res.json(streams);
//   });
// });

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
// app.listen(port, () => console.log(`Server up and running on port ${port} !`));

// module.exports = app;


const express = require("express");
const bodyParser = require("body-parser");
const user = require("../db/models/Users");
const InitiateMongoServer = require("../db/index.js");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  // res.json({ message: "API Working" });
  console.log(res)
});

/**
 * Router Middleware
 * Router - /user/*
 * Method - *
 */
app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});