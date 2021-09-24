import mongoose, { Types } from 'mongoose';

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    _id: { type: Types.ObjectId },
    ListIdFriends: { type: [Types.ObjectId] },
});

const FriendModel = mongoose.model('Friend', FriendSchema);
export {FriendModel, FriendSchema};