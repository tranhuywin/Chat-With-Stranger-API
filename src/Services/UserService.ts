import IUser from "../interfaces/IUser";
import { UserModel } from "../models/UserShema";


async function CreateUser(user: IUser) {
    let ramdomCode = (Math.random() + 1).toString(36).substring(7).toUpperCase();
    try {
        user.CodeAddFriend = ramdomCode;
        const userModel = new UserModel(user);
        await userModel.save();
        return userModel;
    } catch (error) {
        throw new Error("Create User failed");
    }
}

async function GetUser(id: String) {
    try {
        const user = await UserModel.findById(id);
        return user;
    } catch (error) {
        throw new Error("Find User failed");
    }
}

async function UpdateUser(id: string, user: IUser) {
    try {
        const result = await UserModel.findByIdAndUpdate(id, user, {new: true});
        await result.save();
        return result;
    } catch (error) {
        throw new Error("Update User failed");
    }
}

async function RefreshCode(id:string) {
    
}
export default { CreateUser, GetUser, UpdateUser }