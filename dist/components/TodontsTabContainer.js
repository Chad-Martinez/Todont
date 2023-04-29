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
const React = __importStar(require("react"));
const react_1 = require("react");
const Box_1 = __importDefault(require("@mui/material/Box"));
const Tab_1 = __importDefault(require("@mui/material/Tab"));
const TabContext_1 = __importDefault(require("@mui/lab/TabContext"));
const TabList_1 = __importDefault(require("@mui/lab/TabList"));
const TabPanel_1 = __importDefault(require("@mui/lab/TabPanel"));
const Todonts_1 = __importDefault(require("./Todonts"));
const TodontTabContainer = ({ todonts, onMoveTodont, onCompleteTodont, }) => {
    const [tab, setTab] = (0, react_1.useState)('1');
    const [activeDonts, setActiveDonts] = (0, react_1.useState)([]);
    const [deletedDonts, setDeletedDonts] = (0, react_1.useState)([]);
    (0, react_1.useEffect)(() => {
        if (todonts.length > 0) {
            let active = [];
            let deleted = [];
            todonts.forEach((todont) => {
                if (todont.condition === 'ACTIVE')
                    return active.push(todont);
                if (todont.condition === 'DELETED')
                    return deleted.push(todont);
            });
            setActiveDonts(active);
            setDeletedDonts(deleted);
        }
    }, [todonts]);
    const handleChange = (event, newValue) => {
        setTab(newValue);
    };
    return (React.createElement(Box_1.default, { sx: { width: '100%', typography: 'body1', marginY: '30px' } },
        React.createElement(TabContext_1.default, { value: tab },
            React.createElement(Box_1.default, { sx: { borderBottom: 1, borderColor: 'divider' } },
                React.createElement(TabList_1.default, { onChange: handleChange, "aria-label": 'lab API tabs example' },
                    React.createElement(Tab_1.default, { label: `Active • ${activeDonts.length}`, value: '1' }),
                    React.createElement(Tab_1.default, { label: `Deleted • ${deletedDonts.length}`, value: '2' }))),
            React.createElement(TabPanel_1.default, { value: '1' },
                React.createElement(Todonts_1.default, { todonts: activeDonts, onMoveTodont: onMoveTodont, onCompleteTodont: onCompleteTodont })),
            React.createElement(TabPanel_1.default, { value: '2' },
                React.createElement(Todonts_1.default, { todonts: deletedDonts, onMoveTodont: onMoveTodont, onCompleteTodont: onCompleteTodont })))));
};
exports.default = TodontTabContainer;
