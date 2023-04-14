// const mongoose=require('mangoose')


// const UserSchema=new mangoose.Schema({
//     name:{
//         type:String,
//         require:True
//     },
//     email:{
//         type:String,
//         require:True
//     },
//     password:{
//         type:String,        
//         require:True
//     },
//     date:{
//         type:Date,
//         require:Date.now
//     }
// })

// const User=mongoose.model('User',UserSchema)
// module.exports=User;


const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});


const User = mongoose.model('User', userSchema);

module.exports = User;