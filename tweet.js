const mongoose = require('mongoose');
const host = 'mongodb://127.0.0.1/relation-db';

// Connect to MongoDB
mongoose.connect(host).then(res => {
    console.log('MongoDB has connected.');
}).catch(err => {
    console.log(err);
})

// Schema
const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
});
const tweetSchema = new mongoose.Schema({
    text: String,
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});
// Model
const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

// Create Tweet
// const makeTweet = async() => {
//     const user = await User.findOne({
//         username: 'johndoe'
//     });
//     const tweet = new Tweet({
//         text: 'Hello World!',
//         likes: 101
//     });
//     tweet.user = user;
//     tweet.save();
// }
// makeTweet();

// const showTweets = async() => {
//     const tweets = await Tweet.findById('661d05a2fab8c460096b9c56').populate('user');
//     console.log(tweets);
// }
// showTweets();