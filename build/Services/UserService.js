"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserShema_1 = __importDefault(require("../models/UserShema"));
function CreateUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const userModel = new UserShema_1.default(user);
            yield userModel.save();
            return userModel;
        }
        catch (error) {
            throw new Error("Create User failed");
        }
    });
}
function GetUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UserShema_1.default.findById(id);
            return user;
        }
        catch (error) {
            throw new Error("Find User failed");
        }
    });
}
exports.default = { CreateUser, GetUser };
