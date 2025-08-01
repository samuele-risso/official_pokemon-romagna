"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsController = void 0;
const base_controllers_js_1 = require("../api-base/base.controllers.js");
const cards_commands_js_1 = require("../api-commands/cards.commands.js");
const cards_queries_js_1 = require("../api-queries/cards.queries.js");
class CardsController extends base_controllers_js_1.BaseControllers {
    async GetById(req, res) {
        const istance = new cards_queries_js_1.CardsQueries();
        const cardId = req.params.id;
        if (!cardId) {
            res.status(400).json({ message: 'Card ID is required.' });
            return;
        }
        try {
            const card = await istance.DetailQuery({ id: cardId });
            if (!card) {
                res.status(404).json({ message: 'Card not found.' });
                return;
            }
            const response = {
                img: card.img,
                productName: card.productName,
                productLanguage: card.productLanguage,
                condition: card.condition,
                releaseDate: card.releaseDate,
                description: card.description,
            };
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async GetAll(req, res) {
        const istance = new cards_queries_js_1.CardsQueries();
        try {
            const cards = await istance.ListQuery();
            if (!cards || !cards.items) {
                res.status(200).json({ items: [] });
                return;
            }
            const response = {
                items: cards.items,
            };
            res.status(200).json(response);
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async Add(req, res) {
        const istance = new cards_commands_js_1.CardsCommands();
        const payload = {
            img: req.body.img,
            productName: req.body.productName,
            productLanguage: req.body.productLanguage,
            releaseDate: req.body.releaseDate,
            condition: req.body.condition,
            description: req.body.description
        };
        try {
            await istance.AddCommand(payload);
            res.status(201).json({ message: 'Card added successfully.' });
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async Update(req, res) {
        const istance = new cards_commands_js_1.CardsCommands();
        const payload = req.body;
        try {
            await istance.UpdateCommand({
                id: payload.id,
                img: payload.img,
                productName: payload.productName,
                productLanguage: payload.productLanguage,
                condition: payload.condition,
                releaseDate: payload.releaseDate,
                description: payload.description,
            });
            res.status(200).json({ message: 'Card updated successfully.' });
        }
        catch (error) {
            console.error('Error updating card:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async Delete(req, res) {
        const istance = new cards_commands_js_1.CardsCommands();
        const payload = { id: req.params.id };
        try {
            await istance.DeleteCommand({ id: payload.id });
            res.status(200).json({ message: 'Card deleted successfully.' });
        }
        catch (error) {
            console.error('Error deleting card:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
}
exports.CardsController = CardsController;
