import express from 'express';
import routes from "./router";
import ConnectDB from './configs/ConnectDB';
import SocketIO from './socket';
import http from 'http';
import Socket from 'socket.io';

//init server
const app = express();
const server = http.createServer(app);
const io = new Socket.Server(server, { cors: { origin: "*" } });
ConnectDB();

//init socket
SocketIO(io);

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);


const port = 3000 || process.env.PORT;
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
