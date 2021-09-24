import { Types, Document } from "mongoose";

export default interface IListFriends extends Document {
    _id: Types.ObjectId,
    ListIdFriends: Array<Types.ObjectId>,
}