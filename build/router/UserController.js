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
const express_1 = require("express");
const UserService_1 = __importDefault(require("../Services/UserService"));
const validationShema_1 = __importDefault(require("../helpers/validationShema"));
const router = (0, express_1.Router)();
router.post('/sign-in', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //validation data Request
    const user = req.body;
    try {
        yield validationShema_1.default.UserShema.validateAsync(user);
    }
    catch (error) {
        res.status(400).json({ status: error.details });
        return;
    }
    UserService_1.default.CreateUser(user).then((user) => {
        res.status(201).json({ status: "Success", user: user });
    }).catch((e) => {
        res.status(400).json({ status: e.message });
    });
}));
router.get('/me/:idUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    UserService_1.default.GetUser(idUser).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e) => {
        res.status(400).json({ status: e.message });
    });
}));
router.put('/me/:idUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { idUser } = req.params;
    //validation data Request
    const user = req.body;
    try {
        yield validationShema_1.default.UserShema.validateAsync(user);
    }
    catch (error) {
        res.status(400).json({ status: error.details });
        return;
    }
    UserService_1.default.UpdateUser(idUser, user).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e) => {
        res.status(400).json({ status: e.message });
    });
}));
exports.default = router;
