const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/rajshekar", { useNewUrlParser: true, useUnifiedTopology: true  }).then(() => {
    console.log("connectd to db")
}).catch((err) => {
    console.log(err)
})

module.exports = mongoose;