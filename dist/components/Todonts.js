"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const TodontItem_1 = __importDefault(require("./TodontItem"));
const Todonts = ({ todonts, onMoveTodont, onCompleteTodont }) => {
    const sortedTodonts = todonts.sort((t1, t2) => t1.completed > t2.completed ? 1 : t1.completed < t2.completed ? -1 : 0);
    const mapTodonts = todonts.length > 0 &&
        sortedTodonts.map((todont) => (react_1.default.createElement(TodontItem_1.default, { key: todont.id, todont: todont, onMoveTodont: onMoveTodont, onCompleteTodont: onCompleteTodont })));
    return react_1.default.createElement(material_1.List, null, mapTodonts);
};
exports.default = Todonts;
