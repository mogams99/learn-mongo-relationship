const mongoose = require('mongoose');
const host = 'mongodb://127.0.0.1/relation-db';

// Connect to MongoDB
mongoose.connect(host).then(res => {
    console.log('MongoDB has connected.');
}).catch(err => {
    console.log(err);
})

// User Schmea
const userSchema = new mongoose.Schema({
    name: String,
    address: [
        {
            _id: false,
            street: String,
            city: String,
            country: String
        }
    ]
});
// User Model
const User = mongoose.model('User', userSchema);

// const MakeUser = async() => {
//     const user = new User({
//         name: 'John Doe',
//     });
//     user.address.push({
//         street: 'St. Montana ',
//         city: 'New York',
//         country: 'America'
//     });
//     const result = await user.save();
//     console.log(result);
// }
// MakeUser();

// const addAddress = async(id) => {
//     const user = await User.findById(id);
//     user.address.push({
//         street: 'St. Louis ',
//         city: 'Silent Hill',
//         country: 'America'
//     });
//     const result = await user.save();
//     console.log(result);
// }
// addAddress('661cf7ea800c1d4fbab7a42b');