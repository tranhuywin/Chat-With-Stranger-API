import { Router, Request, Response } from "express";
import UserService from "../Services/UserService";
import validationShema from "../helpers/validationShema";

const router = Router();

router.post('/sign-in', async (req: Request, res: Response) => {
    //validation data Request
    const user = req.body;
    try {
        await validationShema.UserShema.validateAsync(user);
    } catch (error: any) {
        res.status(400).json({ status: error.details });
        return;
    }

    UserService.CreateUser(user).then((user) => {
        res.status(201).json({ status: "Success", user: user });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message });
    });
})

router.get('/me/:idUser', async (req: Request, res: Response) => {
    const { idUser } = req.params;
    UserService.GetUser(idUser).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message });
    })
})

router.put('/me/:idUser', async (req: Request, res: Response) => {
    const { idUser } = req.params;
    //validation data Request
    const user = req.body;
    try {
        await validationShema.UserShema.validateAsync(user);
    } catch (error: any) {
        res.status(400).json({ status: error.details });
        return;
    }
    
    UserService.UpdateUser(idUser, user).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message });
    })
})

export default router;