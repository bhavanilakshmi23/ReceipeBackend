const mongoose = require('mongoose')

let ReceipeSchema = new mongoose.Schema({
    ReceipeName: { type: String, require: true },
    ReceipeImage: {type: String, require: true },
    Ingrediants: {type: String, require: true },
    Instructions:{type: String, require: true },
    createdAt:{type: Date,default:Date.now()}
},
    {collection:'receipes',versionKey:false}
)

let ReceipeModel = mongoose.model('receipes', ReceipeSchema)

module.exports={ReceipeModel}