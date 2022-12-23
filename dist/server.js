"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Routes_1 = __importDefault(require("./Routes"));
const server = (0, express_1.default)();
const porta = 2707;
server.use(express_1.default.json());
server.use(Routes_1.default);
server.listen(porta, () => {
    console.log("O servidor esta rodando na porta:", porta);
});
