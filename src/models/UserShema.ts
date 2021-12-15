import mongoose from 'mongoose';
import IUser from '../interfaces/IUser';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
    FullName: { type: String, required: true },
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
    ListFriends: { type: [Object], required: false },
    ListBlocks: { type:  [String], required: false },
    ResonReport: {type: [mongoose.Types.ObjectId], ref: 'Report'},
});

const UserModel = mongoose.model<IUser>('User', UserSchema);
export { UserModel, UserSchema};