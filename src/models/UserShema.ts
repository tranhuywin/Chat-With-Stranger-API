import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const User = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Avatar: { type: String },
    Email: { type: String, required: true },
    Sex: { type: String, required: true },
    Meet: {
        From: { type: Number, default: 16 },
        To: { type: Number, default: 30 },
        Sex: { type: String, required: true },
    },
    CodeAddFriend: { type: String, required: true },
    NumberOfTimesReported: { type: Number, default: 0 },
});

const UserModel = mongoose.model('User', User);
export default UserModel;