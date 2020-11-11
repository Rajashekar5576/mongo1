const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bookSchema = Schema({
    title : {
        type : String,
        required : true,
        min: [6, 'Title should be atleast 6 characters'],
        max: 12
    },
    publication: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    category : {
        type: [String],
        required: true,
    },
    publishedAt: {
        type: Date,
        default : new Date()
    },
    createdAt : {
        type : Date,
        default: new Date()
    },
    updatedAt: {
        type: Date,
        default: new Date()
    },
    cost: {
        type: Number,
        required: true,
    },
    isBestSeller: {
        type: Boolean,
        required: true,
    }
})

// bookSchema.pre("save",function(){
//     this.updatedAt = new Date
// })

const bookModel = mongoose.model("book",bookSchema)

module.exports = bookModel;