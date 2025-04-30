import { TreeSchema } from "./tree.schema";

interface LoopSchema{
    count: number,
    sub: TreeSchema<unknown>
}

export type LoopTreeSchema = TreeSchema<LoopSchema>