const mongoose = require('mongoose');
const host = 'mongodb://127.0.0.1/relation-db';

// Connect to MongoDB
mongoose.connect(host).then(res => {
    console.log('MongoDB has connected.');
}).catch(err => {
    console.log(err);
})

// Product Schmea
const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        name: ['spring', 'summer', 'fall', 'winter']
    }
});
// Product Model
const Product = mongoose.model('Product', productSchema);

// Farm Schema
const farmSchema = new mongoose.Schema({
    name: String,
    city: String,
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});
// Farm Model
const Farm = mongoose.model('Farm', farmSchema);

// Product.insertMany([
//     {
//         name: 'Melon',
//         price: 9.1,
//         season: 'summer'
//     },
//     {
//         name: 'Kiwi',
//         price: 6.3,
//         season: 'summer'
//     },
//     {
//         name: 'Berry',
//         price: 10.9,
//         season: 'winter'
//     }
// ]);

// const makeFarm = async() => {
//     const farm = new Farm({
//         name: 'Farm',
//         city: 'Anytown',
//     });
//     const fruit = await Product.findOne({ name: 'Melon' });
//     farm.products.push(fruit);
//     const result = await farm.save();
//     console.log(result);
// }
// makeFarm();

// const addProduct = async(id) => {
//     const farm = await Farm.findById(id);
//     const fruit = await Product.findOne({ name: 'Berry' });
//     farm.products.push(fruit);
//     const result = await farm.save();
//     console.log(result);
// }
// addProduct('661cfd536680aca2bbd12e6e');