"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtbCommands = void 0;
const client_1 = require("@prisma/client");
const base_commands_js_1 = require("../api-base/base.commands.js");
const prisma = new client_1.PrismaClient();
class EtbCommands extends base_commands_js_1.BaseCommands {
    async AddCommand(cmd) {
        const payload = {
            img: cmd.img,
            productName: cmd.productName,
            productLanguage: cmd.productLanguage,
            condition: cmd.condition,
            releaseDate: cmd.releaseDate,
            description: cmd.description,
        };
        try {
            await prisma.etb.create({ data: payload });
            console.info("Etb -> AddCommand succeeded");
        }
        catch (error) {
            console.error("Etb -> AddCommand failed", error);
        }
    }
    ;
    async UpdateCommand(cmd) {
    }
    ;
    async DeleteCommand(cmd) {
    }
}
exports.EtbCommands = EtbCommands;
