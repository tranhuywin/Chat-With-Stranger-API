import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    User: { type: Schema.Types.ObjectId, ref: 'User' },
    Reson: { type: String, required: true },
    DateAt: { type: Date, default: Date.now(), required: true }
});

const ReportModel = mongoose.model('Report', ReportSchema);
export { ReportModel, ReportSchema };