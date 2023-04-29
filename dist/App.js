"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const TodontForm_1 = __importDefault(require("./components/TodontForm"));
const TodontsTabContainer_1 = __importDefault(require("./components/TodontsTabContainer"));
require("./App.css");
const enums_1 = require("./types/enums");
const App = () => {
    const [todonts, setTodonts] = (0, react_1.useState)([]);
    const todontSubmitHandler = (todont) => {
        setTodonts([...todonts, todont]);
    };
    const moveTodontHandler = (id) => {
        const newTodonts = todonts.map((todont) => {
            if (id === todont.id) {
                if (todont.condition === enums_1.Condition.Active) {
                    todont.condition = enums_1.Condition.Deleted;
                }
                else {
                    todont.condition = enums_1.Condition.Active;
                }
            }
            return todont;
        });
        setTodonts(newTodonts);
    };
    const completeTodontHandler = (id) => {
        const newTodonts = todonts.map((todont) => {
            if (id === todont.id) {
                todont.completed = !todont.completed;
            }
            return todont;
        });
        setTodonts(newTodonts);
    };
    return (react_1.default.createElement(react_1.Fragment, null,
        react_1.default.createElement("div", { className: 'App' },
            react_1.default.createElement(material_1.Typography, { sx: {
                    color: 'white',
                    fontSize: '2.2em',
                    fontWeight: 'bold',
                    padding: '20px 0px 0px 20px',
                    display: 'inline-block',
                    marginRight: '10px',
                } }, "Todon't App"),
            react_1.default.createElement(material_1.Typography, { sx: {
                    display: 'inline-block',
                    color: 'white',
                } }, "(...don't you dare do it!)"),
            react_1.default.createElement(material_1.Box, { sx: {
                    borderRadius: '8px',
                    bgcolor: 'white',
                    padding: '50px',
                    maxHeight: '80vh',
                    margin: '100px',
                } },
                react_1.default.createElement(material_1.Typography, { sx: {
                        color: '#686565',
                        fontSize: '36px',
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginBottom: '20px',
                    } }, "My Todon'ts"),
                react_1.default.createElement(TodontForm_1.default, { onSubmitTodont: todontSubmitHandler }),
                react_1.default.createElement(TodontsTabContainer_1.default, { todonts: todonts, onMoveTodont: moveTodontHandler, onCompleteTodont: completeTodontHandler })))));
};
exports.default = App;
