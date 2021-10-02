import { Document } from "mongoose"

export default interface IUser extends Document {
    FirstName: string,
    LastName: string,
    Email: string,
    Avatar: string,
    Sex: string,
    Meet: {
        From: number,
        To: number,
        Sex: string
    }
    CodeAddFriend: string,
    NumberOfTimesReported: number,
    ListFriends:[string],
    ListBlocks:[string],
    ResonReport:[{
        _id: string,
        Reson: string,
        DateAt: Date
    }]
}