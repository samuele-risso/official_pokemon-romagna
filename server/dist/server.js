"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
// @ts-ignore
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const cards_controller_1 = require("./api-controllers/cards.controller");
const display_controller_1 = require("./api-controllers/display.controller");
const packs_controller_1 = require("./api-controllers/packs.controller");
const tin_controller_1 = require("./api-controllers/tin.controller");
const etb_controller_1 = require("./api-controllers/etb.controller");
const collections_controller_1 = require("./api-controllers/collections.controller");
const app = (0, express_1.default)();
const PORT = process.env.SERVER_PORT;
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_BASE_URL
}));
const cards = new cards_controller_1.CardsController();
const display = new display_controller_1.DisplayController();
const packs = new packs_controller_1.PacksController();
const tin = new tin_controller_1.TinController();
const etb = new etb_controller_1.EtbController();
const collections = new collections_controller_1.CollectionsController();
app.use(express_1.default.json());
// --- Cards Routes ---
app.get('/api/cards', cards.GetAll);
app.get('/api/cards/:id', cards.GetById);
app.post('/api/cards', cards.Add);
app.put('/api/cards/:id', cards.Update);
app.delete('/api/cards/:id', cards.Delete);
// --- Display Routes ---
app.get('/api/display', display.GetAll);
app.get('/api/display/:id', display.GetById);
app.post('/api/display', display.Add);
app.put('/api/display/:id', display.Update);
app.delete('/api/display/:id', display.Delete);
// --- Packs Routes ---
app.get('/api/packs', packs.GetAll);
app.get('/api/packs/:id', packs.GetById);
app.post('/api/packs', packs.Add);
app.put('/api/packs/:id', packs.Update);
app.delete('/api/packs/:id', packs.Delete);
// --- Tin Routes ---
app.get('/api/tin', tin.GetAll);
app.get('/api/tin/:id', tin.GetById);
app.post('/api/tin', tin.Add);
app.put('/api/tin/:id', tin.Update);
app.delete('/api/tin/:id', tin.Delete);
// --- Etb Routes ---
app.get('/api/etb', etb.GetAll);
app.get('/api/etb/:id', etb.GetById);
app.post('/api/etb', etb.Add);
app.put('/api/etb/:id', etb.Update);
app.delete('/api/etb/:id', etb.Delete);
// --- Collections Routes ---
app.get('/api/collections', collections.GetAll);
app.get('/api/collections/:id', collections.GetById);
app.post('/api/collections', collections.Add);
app.put('/api/collections/:id', collections.Update);
app.delete('/api/collections/:id', collections.Delete);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
