import IReson from "../interfaces/IReson";
import IUser from "../interfaces/IUser";
import { UserModel } from "../models/UserShema";
import { ReportModel } from "../models/ReportSchema";
import userNull from "../helpers/userNull";
async function getAll(): Promise<IUser[]> {
    return await UserModel.find();
}

async function CreateUser(user: IUser): Promise<IUser> {
    let ramdomCode = (Math.random() + 1).toString(36).substring(7).toUpperCase();
    user.Email = user.Email.toLowerCase();
    const userEmail = await GetUserByEmail(user.Email).catch(() => { });
    if (userEmail)
        throw new Error("Email has already been used");
    try {
        user.CodeAddFriend = ramdomCode;
        const userModel = new UserModel(user);
        await userModel.save();
        return userModel;
    } catch (error) {
        throw new Error("Create User failed");
    }
}

async function GetUser(id: String): Promise<IUser> {
    try {
        const user = await UserModel.findById(id);
        if (!user)
            throw new Error("Find User null");
        return user;
    } catch (error) {
        throw new Error("Find User failed");
    }
}

async function GetUserByEmail(email: string): Promise<IUser> {
    try {
        const user = await UserModel.findOne({ Email: email });
        if (!user)
            throw new Error("Find User null");
        return user;
    } catch (error) {
        throw new Error("Find User failed");
    }
}

async function UpdateUser(id: string, user: IUser) {
    try {
        const result = await UserModel.findByIdAndUpdate(id, user, { new: true });
        await result.save();
        return result;
    } catch (error) {
        throw new Error("Update User failed");
    }
}

async function AddFriend(email: string, emailFriend: string) {
    try {
        const user = await UserModel.findOne({ Email: email });
        const friend = await UserModel.findOne({ Email: emailFriend });
        
        if (!user || !friend)
            throw new Error("Find User null");

        user.ListFriends.find((value) => {
            if (emailFriend === value.toString()) {
                throw new Error("User had idfriend");
            }
        });
        user.ListFriends.push({email: emailFriend, room: (user.Email +"#"+ friend.Email)});
        user.save();
        friend.ListFriends.push({email: email, room: (user.Email +"#"+ friend.Email)});
        friend.save();
        
        return user;
    } catch (error) {
        throw new Error("Update User failed");
    }
}

async function Reported(email: string, reson: IReson) {
    const user = await UserModel.findOne({Email: email});
    if (!user)
        throw new Error("Find User null");

    const report = new ReportModel({...reson, User:user._id });
    report.save();
    user.ResonReport.push(report._id);
    user.save();
    const newUser = await UserModel.findOne({Email: email}).populate("ResonReport");
    return newUser;
}

async function GetFriends(email: string) {
    const user = await UserModel.findOne({Email: email});
    if (!user)
        throw new Error("Find User null");

    const newUser = await UserModel.findOne({Email: email})
    return newUser?.ListFriends;
}

async function AddFriendByCode(email: string, code: string) {
    const user = await UserModel.findOne({CodeAddFriend: code});
    const me = await UserModel.findOne({Email: email});
    if (!user)
        throw new Error("Find User null");
    if (!me)
    throw new Error("Find User null");

    await AddFriend(email, user.Email);
    return {status: "success"};
}
export default { CreateUser, GetUser, UpdateUser, AddFriend, Reported, getAll, GetUserByEmail, GetFriends, AddFriendByCode };