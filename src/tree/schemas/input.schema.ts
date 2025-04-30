import { JSONSchemaType } from "ajv";
import { ActionType } from "../actions/types/action.type";
import { SendSMSTreeSchema } from "./send-sms.schema";
import { SendEmailTreeSchema } from "./send-email.schema";
import { ConditionalTreeSchema } from "./conditional.schema";
import { LoopTreeSchema } from "./loop.schema";

const schemaId = 'https://example.com/schema';


export const inputSchema: JSONSchemaType<
    SendEmailTreeSchema |
    SendSMSTreeSchema |
    ConditionalTreeSchema |
    LoopTreeSchema
> = {
    $id: `${schemaId}`,
    type: 'object',
    oneOf: [
        {
            type: 'object',
            properties: {
                actionType: {
                    type: 'string',
                    const: ActionType.SEND_EMAIL
                },
                params: {
                    type: 'object',
                    properties: {
                        from: {
                            type: 'string',
                        },
                        to: {
                            type: 'string',
                        },
                        next: {
                            $ref: `${schemaId}`
                        }
                    },
                    required: ['from', 'to'],
                }
            },
            required: ['actionType', 'params'],
            additionalProperties: false
        },
        {
            type: 'object',
            properties: {
                actionType: {
                    type: 'string',
                    const: ActionType.SEND_SMS
                },
                params: {
                    type: 'object',
                    properties: {
                        phoneNumber: {
                            type: 'number',
                        },
                        next: {
                            $ref: `${schemaId}`
                        }
                    },
                    required: ['phoneNumber'],
                }
            },
            required: ['actionType', 'params'],
            additionalProperties: false
        },
        {
            type: 'object',
            properties: {
                actionType: {
                    type: 'string',
                    const: ActionType.CONDITIONAL
                },
                params: {
                    type: 'object',
                    properties: {
                        condition: {
                            type: 'string',
                        },
                        trueCase: {
                            $ref: `${schemaId}`
                        },
                        falseCase: {
                            $ref: `${schemaId}`
                        }
                    },
                    required: ['condition'],
                }
            },
            required: ['actionType', 'params'],
            additionalProperties: false
        },
        {
            type: 'object',
            properties: {
                actionType: {
                    type: 'string',
                    const: ActionType.LOOP
                },
                params: {
                    type: 'object',
                    properties: {
                        count: {
                            type: 'number',
                        },
                        sub: {
                            $ref: `${schemaId}`
                        }
                    },
                    required: ['count', 'sub'],
                }
            },
            required: ['actionType', 'params'],
            additionalProperties: false
        },
    ]
};