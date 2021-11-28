import IUser from "../interfaces/IUser";
const userNull = {
    _id: "",
    FullName: '',
    Email: '',
    Avatar: '',
    Sex: '',
    Meet: {
        From: 0,
        To: 0,
        Sex: ''
    },
    CodeAddFriend: '',
    NumberOfTimesReported: 0,
    ListFriends:[''],
    ListBlocks:[''],
    ResonReport:[{
        Reson: '',
        DateAt: new Date()
    }],
    __v: 0,
};
export default userNull;