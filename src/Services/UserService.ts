import { Types } from "mongoose";
import IUser from "../interfaces/IUser";
import UserModel from "../models/UserShema";


async function CreateUser(user: IUser){
    try {
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

export default { CreateUser, GetUser }