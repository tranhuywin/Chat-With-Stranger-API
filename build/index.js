"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
const ConnectDB_1 = __importDefault(require("./configs/ConnectDB"));
const app = (0, express_1.default)();
(0, ConnectDB_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
(0, router_1.default)(app);
const port = 3000 || process.env.PORT_SERVER;
app.listen(port, () => console.log(`Server is listening on port: ${port}`));
