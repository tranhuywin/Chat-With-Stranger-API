"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const User = new Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Avatar: { type: String },
    Email: { type: String, required: true },
    Sex: { type: String, required: true },
    Meet: {
        From: { type: Number, default: 16 },
        To: { type: Number, default: 30 },
        Sex: { type: String, required: true },
    },
    CodeAddFriend: { type: String, required: true },
    NumberOfTimesReported: { type: Number, default: 0 },
});
const UserModel = mongoose_1.default.model('User', User);
exports.default = UserModel;
