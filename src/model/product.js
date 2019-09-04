const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const ProductSchema = new Schema({
    catagory: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    productName: {
        type: String,
        required: true 
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})


ProductSchema.methods.toJson = function () {
    return {
      catagory: this.catagory,
      price: this.price,
      quantity: this.quantity,
      productName: this.productName,
      description: this.description,
      image: this.image
    }
  }
  
  module.exports = mongoose.model('Product', ProductSchema);