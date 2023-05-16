// config/ensureLOggedIn.js


// ------------------------ MIDDLEWARE ------------------------ 
// this middleware is to security users from getting in unauthorized!
// and it will run in the middle of the function, it checks a user before the function runs futher down the road

module.exports = function(req,res,next) {
    // Status code of 401 is Unauthorized
    if (!req.user) return res.status(401).json('Unauthorized')
    // A okay
    next()
}