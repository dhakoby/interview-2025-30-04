import { Action } from "../../base/action";
import { TreeSchema } from "../../schemas/tree.schema";

export interface LoopActionDataType{
    count: number,
    sub: TreeSchema<unknown>
}

export class LoopAction extends Action{
    async exec(data: LoopActionDataType) {
        return Array(data.count).fill(data.sub);
    }
}