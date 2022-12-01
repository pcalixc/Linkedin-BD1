"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.get('/hh', async (req, res) => {
    res.send();
});
//let b = JSON.parse(req.body).data;
//res.render('pages/test', {result: {result,b}});
//res.status=200;
//})
exports.default = router;
