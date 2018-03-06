var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChefSchema = new Schema({
    name: {type: String, required: true, min: 3, max: 100},
});

// Export model.
module.exports = mongoose.model('Chef', ChefSchema);
