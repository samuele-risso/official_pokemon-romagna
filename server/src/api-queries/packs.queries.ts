import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

const prisma = new PrismaClient();

export class PacksQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const pack = await prisma.packs.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: pack.img,
                productName: pack.productName,
                productLanguage: pack.productLanguage,
                condition: pack.condition,
                releaseDate: pack.releaseDate,
                description: pack.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Pack with ID #${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const packs = await prisma.packs.findMany();
            const detailDTOs: IDetailDTO[] = packs.map((pack: any) => ({
                img: pack.img,
                productName: pack.productName,
                productLanguage: pack.productLanguage,
                condition: pack.condition,
                releaseDate: pack.releaseDate,
                description: pack.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Packs to list failed.`);
        }
    }
}
