"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const container_1 = __importDefault(require("./src/startup/container"));
const mongoose_1 = __importDefault(require("mongoose"));
const server = container_1.default.resolve('app');
const { MONGO_URI } = container_1.default.resolve("config");
mongoose_1.default.connect(MONGO_URI)
    .then(() => server.start())
    .catch(console.log);
//# sourceMappingURL=index.js.map