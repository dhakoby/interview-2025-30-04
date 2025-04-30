import { TreeSchema } from "../schemas/tree.schema";

export abstract class Action{
    abstract exec(data: unknown): Promise<TreeSchema<unknown> | TreeSchema<unknown>[] | void>
}