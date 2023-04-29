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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const material_1 = require("@mui/material");
const enums_1 = require("../types/enums");
const TodontForm = ({ onSubmitTodont }) => {
    const [name, setName] = (0, react_1.useState)('');
    const todontChangeHandler = (e) => {
        const { target } = e;
        setName(target.value);
    };
    const todontSubmitHandler = (e) => {
        e.preventDefault();
        const id = Math.round(Math.random() * 90) / 90;
        const todont = {
            id,
            name,
            completed: false,
            condition: enums_1.Condition.Active,
        };
        onSubmitTodont(todont);
        setName('');
    };
    return (react_1.default.createElement(material_1.Grid, { container: true, spacing: 2, component: 'form' },
        react_1.default.createElement(material_1.Grid, { item: true, xs: 10 },
            react_1.default.createElement(material_1.TextField, { required: true, label: "Add Todon't", placeholder: "...add a todon't", fullWidth: true, name: 'todont', onChange: todontChangeHandler, value: name, autoFocus: true })),
        react_1.default.createElement(material_1.Grid, { item: true, xs: 2, sx: {
                display: 'flex',
                justifyContent: 'end',
            } },
            react_1.default.createElement(material_1.Button, { sx: {
                    width: '100%',
                    height: '100%',
                }, type: 'submit', variant: 'contained', onClick: todontSubmitHandler, disabled: !name }, "Add"))));
};
exports.default = TodontForm;
