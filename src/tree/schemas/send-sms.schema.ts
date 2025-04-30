import { TreeSchema } from "./tree.schema";

export interface SendSMSSchema{
    phoneNumber: number,
    next?: TreeSchema<unknown>
}

export type SendSMSTreeSchema = TreeSchema<SendSMSSchema>