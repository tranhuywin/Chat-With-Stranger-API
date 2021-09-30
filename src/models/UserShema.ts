import mongoose from 'mongoose';
import { FriendSchema } from './FriendsSchema';
import { ReportSchema } from './ReportSchema';

const Schema = mongoose.Schema;


const UserSchema = new Schema({
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
    ListFriends: { type: FriendSchema, required: false },
    ListBlocks: { type: FriendSchema, required: false },
    ResonReport: {type: [ReportSchema]}
});

const UserModel = mongoose.model('User', UserSchema);
export { UserModel, UserSchema };