"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacksController = void 0;
const packs_commands_js_1 = require("../api-commands/packs.commands.js");
const base_controllers_js_1 = require("../api-base/base.controllers.js");
class PacksController extends base_controllers_js_1.BaseControllers {
    async GetById(req, res) {
        try {
        }
        catch (error) {
        }
    }
    async GetAll(req, res) {
        try {
        }
        catch (error) {
        }
    }
    async Add(req, res) {
        const istance = new packs_commands_js_1.PacksCommands();
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
            res.status(201).json({ message: 'Packs added successfully.' });
        }
        catch (error) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
    async Update(req, res) {
        const istance = new packs_commands_js_1.PacksCommands();
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
        const istance = new packs_commands_js_1.PacksCommands();
        const payload = req.body;
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
exports.PacksController = PacksController;
