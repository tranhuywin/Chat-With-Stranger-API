import { Application } from "express";
import UserController from "./UserController";

export default function routes(app: Application){
    app.use('/user', UserController);
}