import { actions } from "./actions/types/action.type";
import { TreeSchema } from "./schemas/tree.schema";

export class TreeService{
    async exec(tree: TreeSchema<unknown>){

        async function recursion(subTree: TreeSchema<unknown> | TreeSchema<unknown>[] | void){
            if(!subTree){
                return;
            }

            if(Array.isArray(subTree)){
                for(let i = 0; i < subTree.length; i++){
                    const action = actions[subTree[i].actionType]();
                    recursion(await action.exec(subTree[i].params));
                }
                
                return;
            }

            const action = actions[subTree.actionType]();
            recursion(await action.exec(subTree.params));
        }

        recursion(tree);
    }
}