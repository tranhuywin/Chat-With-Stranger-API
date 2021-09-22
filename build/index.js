"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const ConnectDB_1 = __importDefault(require("./configs/ConnectDB"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
//init server
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
const io = new socket_io_1.default.Server(server);
(0, ConnectDB_1.default)();
//init socket
io.on('connection', (socket) => {
    console.log(socket);
});
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, router_1.default)(app);
const port = 3000 || process.env.PORT;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
