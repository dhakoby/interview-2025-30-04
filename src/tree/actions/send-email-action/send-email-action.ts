import { Action } from "../../base/action";
import { TreeSchema } from "../../schemas/tree.schema";

export interface SendEmailActionDataType{
    from: string,
    to: string,
    next?: TreeSchema<unknown>
}

export class SendEmailAction extends Action{
    async exec(data: SendEmailActionDataType) {
        console.log(`Sending Email from ${data.from} to ${data.to}`)
        
        return data.next;
    }
}