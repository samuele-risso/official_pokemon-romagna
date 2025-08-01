"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsCommands = void 0;
const client_1 = require("@prisma/client");
const base_commands_js_1 = require("../api-base/base.commands.js");
const prisma = new client_1.PrismaClient();
class CardsCommands extends base_commands_js_1.BaseCommands {
    async AddCommand(cmd) {
        try {
            await prisma.cards.create({
                data: {
                    img: cmd.img,
                    productName: cmd.productName,
                    productLanguage: cmd.productLanguage,
                    condition: cmd.condition,
                    releaseDate: cmd.releaseDate,
                    description: cmd.description,
                }
            });
            console.info("Cards -> AddCommand succeeded");
        }
        catch (error) {
            console.error("Cards -> AddCommand failed", error);
        }
    }
    ;
    async UpdateCommand(cmd) {
        try {
            await prisma.cards.update({
                where: {
                    id: cmd.id,
                },
                data: {
                    img: cmd.img,
                    productName: cmd.productName,
                    productLanguage: cmd.productLanguage,
                    condition: cmd.condition,
                    releaseDate: cmd.releaseDate,
                    description: cmd.description,
                }
            });
            console.info("Cards -> AddCommand succeeded");
        }
        catch (error) {
            console.error("Cards -> UpdateCommand failed", error);
        }
    }
    ;
    async DeleteCommand(cmd) {
        try {
            await prisma.cards.delete({
                where: {
                    id: cmd.id,
                }
            });
            console.info("Cards -> DeleteCommand succeeded");
        }
        catch (error) {
            console.error("Cards -> DeleteCommand failed", error);
        }
    }
    ;
}
exports.CardsCommands = CardsCommands;
