import express from 'express';
import routes from "./router";
import ConnectDB from './configs/ConnectDB';

const app = express();

ConnectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

const port = 3000 || process.env.PORT_SERVER;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));