"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const material_1 = require("@mui/material");
const Check_1 = __importDefault(require("@mui/icons-material/Check"));
const Delete_1 = __importDefault(require("@mui/icons-material/Delete"));
const RestoreFromTrash_1 = __importDefault(require("@mui/icons-material/RestoreFromTrash"));
const colors_1 = require("@mui/material/colors");
const TodontItem = ({ todont: { id, name, completed, condition }, onMoveTodont, onCompleteTodont, }) => {
    const moveTodont = () => {
        onMoveTodont(id);
    };
    const completeTodont = () => {
        onCompleteTodont(id);
    };
    const todntStatus = completed ? colors_1.green[500] : '';
    return (react_1.default.createElement(material_1.ListItem, { sx: {
            border: 2,
            borderColor: completed ? colors_1.green[500] : '#bdbdbd',
            borderRadius: 2,
            height: '60px',
            marginBottom: 2,
            boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
        }, secondaryAction: react_1.default.createElement(material_1.ListItemButton, { onClick: moveTodont },
            react_1.default.createElement(material_1.IconButton, { edge: 'start', "aria-label": 'delete' }, condition === 'ACTIVE' ? react_1.default.createElement(Delete_1.default, null) : react_1.default.createElement(RestoreFromTrash_1.default, null))) },
        react_1.default.createElement(material_1.ListItemAvatar, null,
            react_1.default.createElement(material_1.Avatar, { sx: { bgcolor: todntStatus } },
                react_1.default.createElement(material_1.IconButton, { onClick: completeTodont },
                    react_1.default.createElement(Check_1.default, { sx: { color: 'white' } })))),
        react_1.default.createElement(material_1.ListItemText, null, name)));
};
exports.default = TodontItem;
