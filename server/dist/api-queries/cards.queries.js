"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardsQueries = void 0;
const client_1 = require("@prisma/client");
const base_queries_js_1 = require("../api-base/base.queries.js");
const prisma = new client_1.PrismaClient();
class CardsQueries extends base_queries_js_1.BaseQueries {
    async DetailQuery(qry) {
        try {
            const card = await prisma.cards.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });
            const detailDTO = {
                img: card.img,
                productName: card.productName,
                productLanguage: card.productLanguage,
                condition: card.condition,
                releaseDate: card.releaseDate,
                description: card.description,
            };
            return detailDTO;
        }
        catch (error) {
            throw new Error(`Card with ID ${qry.id} not found.`);
        }
    }
    async ListQuery() {
        try {
            const cards = await prisma.cards.findMany();
            const detailDTOs = cards.map((card) => ({
                img: card.img,
                productName: card.productName,
                productLanguage: card.productLanguage,
                condition: card.condition,
                releaseDate: card.releaseDate,
                description: card.description,
            }));
            const listDTO = {
                items: detailDTOs
            };
            return listDTO;
        }
        catch (error) {
            throw new Error(`Cards to list failed.`);
        }
    }
}
exports.CardsQueries = CardsQueries;
