const mongooes = require('mongoose');
const timestamps = require('mongoose-timestamp');
const Schema = mongooes.Schema;

const EpisodeSchema = new Schema({
    course: { type: Schema.Types.ObjectId, ref: 'Course' },
    title: { type: String, required: true },
    body: { type: String, required: true },
    videoUrl: { type: String, required: true },
    number: { type: String, required: true },
    viewCount: { type: Number, default: 0 },
    commnetCount: { type: Number, default: 0 },
});
EpisodeSchema.plugin(timestamps);

module.exports = mongooes.model('Episode', EpisodeSchema);