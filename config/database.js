const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {
    useNewParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection

db.on('connected', () => {
    console.log(`connect to ${db.name} at ${db.host}:${db.port}`)
})