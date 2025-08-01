"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
const express_1 = __importDefault(require("express"));
const cards_controller_1 = require("./api-controllers/cards.controller");
const app = (0, express_1.default)();
const PORT = 8080;
const cards = new cards_controller_1.CardsController();
// const display = new DisplayController();
// const packs = new PacksController();
// const tin = new TinController();
// const etb = new EtbController();
// const collections = new CollectionsController();
// --- Cards Routes ---
app.get('/api/cards', cards.GetAll);
app.get('/api/cards/:id', cards.GetById);
app.post('/api/cards', cards.Add);
app.put('/api/cards/:id', cards.Update);
app.delete('/api/cards/:id', cards.Delete);
// // --- Display Routes ---
// app.post('/api/display', display.Add);
// // --- Packs Routes ---
// app.post('/api/packs', packs.Add);
// // --- Tin Routes ---
// app.post('/api/tin', tin.Add);
// // --- Etb Routes ---
// app.post('/api/etb', etb.Add);
// // --- Collections Routes ---
// app.post('/api/collections', collections.Add);
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
