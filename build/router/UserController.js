"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserService_1 = __importDefault(require("../Services/UserService"));
const router = (0, express_1.Router)();
router.post('/sign-in', (req, res) => {
    const user = req.body;
    UserService_1.default.CreateUser(user).then((user) => {
        res.status(200).json({ status: "success", user: user });
    }).catch((e) => {
        res.status(500).json({ status: e.message });
    });
});
router.get('/me/:idUser', (req, res) => {
    const { idUser } = req.params;
    UserService_1.default.GetUser(idUser).then((user) => {
        res.status(200).json({ status: "success", user: user });
    }).catch((e) => {
        res.status(500).json({ status: e.message });
    });
});
exports.default = router;
