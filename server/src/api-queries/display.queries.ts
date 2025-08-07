import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

const prisma = new PrismaClient();

export class DisplayQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const display = await prisma.display.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: display.img,
                productName: display.productName,
                productLanguage: display.productLanguage,
                condition: display.condition,
                releaseDate: display.releaseDate,
                description: display.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Display with ID #${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const displays = await prisma.display.findMany();
            const detailDTOs: IDetailDTO[] = displays.map((display: any) => ({
                img: display.img,
                productName: display.productName,
                productLanguage: display.productLanguage,
                condition: display.condition,
                releaseDate: display.releaseDate,
                description: display.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Display to list failed.`);
        }
    }
}
