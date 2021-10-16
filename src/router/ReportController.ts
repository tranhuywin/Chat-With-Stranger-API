import { Router, Request, Response } from "express";
import { GetYMDHMS } from "../helpers/dateTime";
import IsResonReport from "../helpers/isResonReport";
import validationShema from "../helpers/validationShema";
import IReson from "../interfaces/IReson";
import UserService from "../Services/UserService";

const router = Router();

router.get('/:idUser', async (req: Request, res: Response) => {
    const reson: IReson = req.body;
    const { idUser } = req.params;
    reson.DateAt = new Date(GetYMDHMS());

    if (!IsResonReport(reson.Reson)) {
        res.status(400).json({ status: "reson not found" });
        return;
    }
    try {
        await validationShema.ReportSchema.validateAsync(reson);
    } catch (error: any) {
        res.status(400).json({ status: error.details });
        return;
    }

    const dataSave = await UserService.Reported(idUser, reson);
    res.status(200).json({ status: "Success", user: dataSave });
})

export default router;