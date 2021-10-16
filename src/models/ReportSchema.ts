import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    Reson: { type: String, required: true },
    DateAt: { type: Date, default: Date.now(), required: true }
});

const ReportModel = mongoose.model('Report', ReportSchema);
export { ReportModel, ReportSchema };