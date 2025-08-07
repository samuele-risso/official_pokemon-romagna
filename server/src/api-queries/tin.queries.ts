import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

const prisma = new PrismaClient();

export class TinQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const tin = await prisma.tin.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: tin.img,
                productName: tin.productName,
                productLanguage: tin.productLanguage,
                condition: tin.condition,
                releaseDate: tin.releaseDate,
                description: tin.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Tin with ID #${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const tins = await prisma.cards.findMany();
            const detailDTOs: IDetailDTO[] = tins.map((tin: any) => ({
                img: tin.img,
                productName: tin.productName,
                productLanguage: tin.productLanguage,
                condition: tin.condition,
                releaseDate: tin.releaseDate,
                description: tin.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Tins to list failed.`);
        }
    }
}
