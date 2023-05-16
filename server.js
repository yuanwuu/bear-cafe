// const express = require('express')
// const path = require('path')
// const favicon = require('serve-favicon')
// const logger = require('morgan')

// const app = express()

// app.use(logger('dev')); // middleware of 
// app.use(express.json());

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));


// // Put API routes here, before the "catch all" route




// // ----------------- CATCH ALL ROUTES ----------------- 
// // the following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*',function(req,res) {
//     res.sendFile(path.join(_dirname,'build','index.html'))
// })





// // ----------------- PORT ----------------- 
// /* Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server 

// PORT: 3001 = Back-End(production build) 
// PORT: 3000 = Front-End 

// with concurrently pkg, npm run dev will run both simotiniouly
// */

// const port = process.env.PORT || 3001; 





// // --------------------------- LISTEN ----------------------------
// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });

// const express = require('express')
// const path = require('path')
// const favicon = require('serve-favicon')
// const logger = require('morgan')

// const app = express()

// app.use(logger('dev')); // middleware of 
// app.use(express.json());

// // Configure both serve-favicon & static middleware
// // to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')));


// // Put API routes here, before the "catch all" route




// // ----------------- CATCH ALL ROUTES ----------------- 
// // the following "catch all" route (note the *) is necessary
// // to return the index.html on all non-AJAX requests
// app.get('/*',function(req,res) {
//     res.sendFile(path.join(_dirname,'build','index.html'))
// })





// // ----------------- PORT ----------------- 
// /* Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server 

// PORT: 3001 = Back-End(production build) 
// PORT: 3000 = Front-End 

// with concurrently pkg, npm run dev will run both simotiniouly
// */

// const port = process.env.PORT || 3001; 





// // --------------------------- LISTEN ----------------------------
// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`)
// });



require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('./config/database');

const app = express();

app.use(logger('dev'));

app.use(express.json());
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Put API routes here, before the "catch all" route

// ======EXAMPLE======
// //controller
// const testController = (req, res) => {

// }

// //route
// app.get("/test", testController)
app.use('/api/users', require('./routes/api/users'))



// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});