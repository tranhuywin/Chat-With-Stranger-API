import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FriendSchema = new Schema({
    ListIdFriends: { type: [Schema.Types.ObjectId] },
});

const FriendModel = mongoose.model('Friend', FriendSchema);
export {FriendModel, FriendSchema};