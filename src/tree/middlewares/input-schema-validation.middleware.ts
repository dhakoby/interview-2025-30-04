import Ajv from "ajv";
import { RequestHandler } from "express";
import { inputSchema } from "../schemas/input.schema";

const ajv = new Ajv();
const validate = ajv.compile(inputSchema);

export const inputSchemaValidationMiddleware: RequestHandler = (req, res, next) => {
    const isValid = validate(req.body);

    if(!isValid){
        res.send(validate.errors);
        return;
    }

    next();
}