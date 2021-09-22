"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const ConnectDB_1 = __importDefault(require("./configs/ConnectDB"));
//import http from 'http';
//import Socket from 'socket.io';
//init server
const app = (0, express_1.default)();
//const server = http.createServer(app);
//const io = new Socket.Server(server);
(0, ConnectDB_1.default)();
//init socket
//io.on('connection', (socket: Socket.Socket) => {
//   console.log(socket);
//})
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, router_1.default)(app);
const port = 3000; // || process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
