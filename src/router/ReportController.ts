import { Router, Request, Response } from "express";
import IReson from "../interfaces/IReson";
import UserService from "../Services/UserService";

const router = Router();

router.get('/:idUser', (req: Request, res: Response) => {
    const { idUser } = req.params;
    const reson: IReson = req.body;

    UserService.Reported(idUser, reson);
})

export default router;