import express from 'express'
import { router } from './routes/index'

import "./database";

const app = express();

app.use(express.json());

app.use(router);

app.listen(3334, () => console.log("Server is running"))