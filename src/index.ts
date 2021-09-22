import express from 'express';
import routes from "./router";
import ConnectDB from './configs/ConnectDB';
//import http from 'http';
//import Socket from 'socket.io';

//init server
const app = express();
//const server = http.createServer(app);
//const io = new Socket.Server(server);
ConnectDB();

//init socket
//io.on('connection', (socket: Socket.Socket) => {
 //   console.log(socket);
//})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routes(app);

const port = 3000;// || process.env.PORT;
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});
