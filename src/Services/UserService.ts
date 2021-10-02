import IUser from "../interfaces/IUser";
import { UserModel } from "../models/UserShema";

async function CreateUser(user: IUser): Promise<IUser>{
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

async function GetUser(id: String): Promise<IUser>{
    try {
        const user = await UserModel.findById(id);
        if(!user)
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

async function RefreshCode(id: string) {

}

async function AddFriend(id: string, idFriend: string){
    try {
        const user = await UserModel.findById(id);
        const friend = await UserModel.findById(idFriend);
        if(!user || !friend)
            throw new Error("Find User null");
        user.ListFriends.push(idFriend);
        user.save();
        friend.ListFriends.push(id);
        friend.save();
        return user;
    } catch (error) {
        throw new Error("Update User failed");
    }
}

export default { CreateUser, GetUser, UpdateUser, AddFriend }