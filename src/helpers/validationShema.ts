import Joi from "joi";

const UserShema = Joi.object({
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    Email: Joi.string().email().required(),
    Avatar: Joi.string().uri().required(),
    Sex: Joi.string().required(),
    Meet: {
        From: Joi.number().min(10).max(60).required(),
        To: Joi.number().min(10).max(60).required(),
        Sex: Joi.string().required(),
    },
    CodeAddFriend: Joi.string().length(5),
    NumberOfTimesReported: Joi.number().default(0).required(),
})

const ReportSchema = Joi.object({
    Reson: Joi.string().required(),
    DateAt: Joi.date().required(),
})

export default { UserShema, ReportSchema }