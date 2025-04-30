import { RequestHandler, Router } from "express";
import { TreeService } from "./tree.service";
import { inputSchemaValidationMiddleware } from "./middlewares/input-schema-validation.middleware";

class TreeController{
    constructor(
        private readonly treeService: TreeService
    ){}

    exec: RequestHandler = async (req, res) => {
        const result = await this.treeService.exec(req.body);

        res.send(200);
    }
}

const treeService = new TreeService();

const treeController = new TreeController(treeService);
const treeRouter = Router();

treeRouter.post('/exec', [
    inputSchemaValidationMiddleware
], treeController.exec);

export default treeRouter;