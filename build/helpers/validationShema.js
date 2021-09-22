"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const UserShema = joi_1.default.object({
    FirstName: joi_1.default.string().required(),
    LastName: joi_1.default.string().required(),
    Email: joi_1.default.string().email().required(),
    Avatar: joi_1.default.string().uri().required(),
    Sex: joi_1.default.string().required(),
    Meet: {
        From: joi_1.default.number().min(10).max(60).required(),
        To: joi_1.default.number().min(10).max(60).required(),
        Sex: joi_1.default.string().required(),
    },
    CodeAddFriend: joi_1.default.string().length(6).required(),
    NumberOfTimesReported: joi_1.default.number().default(0).required(),
});
exports.default = { UserShema };
