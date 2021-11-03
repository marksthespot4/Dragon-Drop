const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

/* Mark's comments
The user schema!
Helps define how a user should look.
Mongoose uses these schema's as MODELS, as exported below.
 */
// Define userSchema
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    pagecount: {
        type: Number,
        required: true,
        default: 0
    }
})

// // Define schema methods
// userSchema.methods = {
//     checkPassword: function(inputPassword) {
//         return bcrypt.compareSync(inputPassword, this.local.password)
//     },
//     hashPassword: plainTextPassword => {
//         return bcrypt.hashSync(plainTextPassword, 10)
//     }
// }
//
// // Define hooks for pre-saving
// userSchema.pre('save', function(next) {
//     if (!this.local.password) {
//         console.log('=======NO PASSWORD PROVIDED=======')
//         next()
//     } else {
//         this.local.password = this.hashPassword(this.local.password)
//         next()
//     }
//     // this.password = this.hashPassword(this.password)
//     // next()
// })

// Create reference to User & export
module.exports = User = mongoose.model("users", userSchema);
