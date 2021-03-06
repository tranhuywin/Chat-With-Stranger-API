import { Router, Request, Response } from "express";
import UserService from "../Services/UserService";
import validationShema from "../helpers/validationShema";
import userNull from "../helpers/userNull";

const router = Router();

router.get('/all', async (req: Request, res: Response) => {
    const users = await UserService.getAll();
    res.json(users);
});

router.post('/sign-up', async (req: Request, res: Response) => {
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

router.get('/email/user', async (req: Request, res: Response) => {
    const email = req.query['email']?.toString() || '';
    UserService.GetUserByEmail(email).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message, user: userNull });
    })
    })


router.put('/me/', async (req: Request, res: Response) => {
    const email = req.query['email']?.toString() || '';
    //validation data Request
    const user = req.body;
    try {
        await validationShema.UserShema.validateAsync(user);
    } catch (error: any) {
        res.status(400).json({ status: error.details });
        return;
    }

    UserService.UpdateUser(email, user).then((user) => {
        res.status(200).json({ status: "Success", user: user });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message });
    })
})

router.get('/me/:email/friends', async (req: Request, res: Response) => {
    const { email } = req.params;
    UserService.GetFriends(email).then((friends) => {
        res.status(200).json({ status: "Success", friends: friends });
    }).catch((e: Error) => {
        res.status(400).json({ status: e.message });
    })
})

router.post('/add-friend/', async (req: Request, res: Response) => {
    const email = req.query['email']?.toString() || '';
    const { code } = req.body;
    await UserService.AddFriendByCode(email, code);
    res.status(200).json({ status: "Success" });
})
export default router;