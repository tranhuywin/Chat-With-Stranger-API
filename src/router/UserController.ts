import { Router, Request, Response } from "express";
import UserService from "../Services/UserService";

const router = Router();

router.post('/sign-in', (req: Request, res: Response): void => {
    const user = req.body;
    UserService.CreateUser(user).then((user) => {
        res.status(200).json({ status: "success", user: user });
    }).catch((e: Error) => {
        res.status(500).json({ status: e.message });
    });
})

router.get('/me/:idUser', (req: Request, res: Response): void => {
    const {idUser} = req.params;
    UserService.GetUser(idUser).then((user) => {
        res.status(200).json({ status: "success", user: user });
    }).catch((e: Error) => {
        res.status(500).json({ status: e.message });
    })
})

router.get('/', (req: Request, res: Response): void => {
    res.send("user");
})

export default router;