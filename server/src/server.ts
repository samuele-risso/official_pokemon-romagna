// @ts-ignore
import express from "express";
// @ts-ignore
import cors from 'cors';
import "dotenv/config";
import { CardsController } from "./api-controllers/cards.controller";
import { DisplayController } from "./api-controllers/display.controller";
import { PacksController } from "./api-controllers/packs.controller";
import { TinController } from "./api-controllers/tin.controller";
import { EtbController } from "./api-controllers/etb.controller";
import { CollectionsController } from "./api-controllers/collections.controller";

const app = express();
const PORT = process.env.SERVER_PORT;

app.use(cors({
  origin: process.env.CLIENT_BASE_URL
}));

const cards = new CardsController();
const display = new DisplayController();
const packs = new PacksController();
const tin = new TinController();
const etb = new EtbController();
const collections = new CollectionsController();

app.use(express.json()); 

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
    console.log(`http://localhost:${PORT}`)
});