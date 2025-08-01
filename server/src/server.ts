// @ts-ignore
import express from "express";
import { CardsController } from "./api-controllers/cards.controller";

const app = express();
const PORT = 8080;

const cards = new CardsController();
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
    console.log(`http://localhost:${PORT}`)
});