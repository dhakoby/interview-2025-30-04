import { TreeSchema } from "./tree.schema";

interface ConditionalSchema{
    condition: string,
    trueCase?: TreeSchema<unknown>,
    falseCase?: TreeSchema<unknown>
}

export type ConditionalTreeSchema = TreeSchema<ConditionalSchema>