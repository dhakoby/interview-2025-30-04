import { ActionType } from "../actions/types/action.type";

export interface TreeSchema<T>{
    actionType: ActionType,
    params: T
}