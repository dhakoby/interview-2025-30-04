import express from 'express';
import treeRouter from './tree/tree.controller';

const PORT = 3100;

const app = express();

app.use(express.json());

app.use(treeRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});