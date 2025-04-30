import { Action } from "../../base/action";
import { ConditionalAction } from "../conditional-action/conditional-action";
import { LoopAction } from "../loop-action/loop-action";
import { SendEmailAction } from "../send-email-action/send-email-action";
import { SendSMSAction } from "../send-sms-action/send-sms-action";

export enum ActionType{
    SEND_EMAIL = 'sendEmail',
    SEND_SMS = 'sendSMS',
    CONDITIONAL = 'conditional',
    LOOP = 'loop'
}

export const actions: Record<ActionType, () => Action> = {
    [ActionType.SEND_EMAIL]: () => new SendEmailAction(),
    [ActionType.SEND_SMS]: () => new SendSMSAction(),
    [ActionType.CONDITIONAL]: () => new ConditionalAction(),
    [ActionType.LOOP]: () => new LoopAction(),
}