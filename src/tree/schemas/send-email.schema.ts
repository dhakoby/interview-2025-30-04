import { TreeSchema } from "./tree.schema";

interface SendEmailSchema{
    from: string,
    to: string,
    next?: TreeSchema<unknown>
}

export type SendEmailTreeSchema = TreeSchema<SendEmailSchema>