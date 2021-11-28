import { Document } from "mongoose"

export default interface IUser extends Document {
    FullName: string,
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
        Reson: string,
        DateAt: Date
    }]
}