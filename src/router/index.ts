import { Application } from "express";
import UserController from "./UserController";
import ReportController from "./ReportController";

export default function routes(app: Application){
    app.use('/user', UserController);
    app.use('/report', ReportController);
}