const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
      name: {
        type: String
      },
      price: {
        type: Number
      }
    }, { timestamps: true, versionKey: false });



module.exports = mongoose.model('Item', ItemSchema, 'item');

