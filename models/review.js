var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ReviewSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 100},
    chef: { type: Schema.ObjectId, ref: 'Chef', required: true },
    dish: {type: String, required: true, min: 3, max: 300},
    stars: {type: Number, required: true, min: 0, max: 5},
    review_text: {type: String, required: true, min: 3, max: 3000},
});

// Export model.
module.exports = mongoose.model('Review', ReviewSchema);
