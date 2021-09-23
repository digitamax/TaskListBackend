const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log('connected to db...')
    } catch (error) {
        console.log("failed to connect DB...")
    }
}

module.exports = connectDB