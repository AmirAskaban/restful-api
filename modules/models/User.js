const mongooes = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongooes.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }]
});
UserSchema.plugin(timestamps);

module.exports = mongooes.model('user', UserSchema);