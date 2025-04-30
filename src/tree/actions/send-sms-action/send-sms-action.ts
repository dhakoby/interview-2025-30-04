import { Action } from "../../base/action";
import { TreeSchema } from "../../schemas/tree.schema";

export interface SendSMSActionDataType{
    phoneNumber: number,
    next?: TreeSchema<unknown>
}

export class SendSMSAction extends Action{
    async exec(data: SendSMSActionDataType) {
        console.log(`Sending SMS to ${data.phoneNumber}`)

        return data.next;
    }
}