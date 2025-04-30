import { Action } from "../../base/action";
import { TreeSchema } from "../../schemas/tree.schema";

export interface ConditionalActionDataType{
    condition: string,
    trueCase?: TreeSchema<unknown>,
    falseCase?: TreeSchema<unknown>
}

export class ConditionalAction extends Action{
    async exec(data: ConditionalActionDataType) {
        try{
            const expression = `return ${data.condition};`;
            const result = new Function(expression)();
            
            return !!result ? data?.trueCase : data?.falseCase;
        }
        catch(_e){
            return;
        }
    }
}