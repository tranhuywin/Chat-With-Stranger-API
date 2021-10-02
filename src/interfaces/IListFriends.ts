import { Types, Document } from "mongoose";

export default interface IListFriends extends Document {
    _id: Types.ObjectId,
    IdFriends: Array<Types.ObjectId>,
}