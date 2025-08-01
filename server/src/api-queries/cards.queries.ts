import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/queries.interfaces.js";

const prisma = new PrismaClient();

export class CardsQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const card = await prisma.cards.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: card.img,
                productName: card.productName,
                productLanguage: card.productLanguage,
                condition: card.condition,
                releaseDate: card.releaseDate,
                description: card.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Card with ID ${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const cards = await prisma.cards.findMany();
            const detailDTOs: IDetailDTO[] = cards.map((card: any) => ({
                img: card.img,
                productName: card.productName,
                productLanguage: card.productLanguage,
                condition: card.condition,
                releaseDate: card.releaseDate,
                description: card.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Cards to list failed.`);
        }
    }
}
