const User = require('../../models/User')
const jwt = require('jsonwebtoken')

module.exports = {
    create
}

// this function fires when a request is made to /api/users POST
async function create(req,res) {
    try {
        // add the user to the database
        // asnyc /await = .then()
        const user = await User.create(req.body)
        // -------------------- token will be a string -------------------- 
        const token = createJWT(user)
        // yes, we can user res.json to send back just a string
        // The client code needs to take this into consideration
        res.json(token)

    } catch (error) {
        res.status(400).json(error)
    }
}

//------------------------- HELPER FUNCTIONS -------------------------
function createJWT(user) {
    return jwt.sign(
        //data payload
        {user},
        preocess.env.SECRET,
        {expiresIn: '24h'}
    )
}