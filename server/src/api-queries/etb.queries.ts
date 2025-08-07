import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

const prisma = new PrismaClient();

export class EtbQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const etb = await prisma.etb.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: etb.img,
                productName: etb.productName,
                productLanguage: etb.productLanguage,
                condition: etb.condition,
                releaseDate: etb.releaseDate,
                description: etb.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Etb with ID #${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const etbs = await prisma.etb.findMany();
            const detailDTOs: IDetailDTO[] = etbs.map((etb: any) => ({
                img: etb.img,
                productName: etb.productName,
                productLanguage: etb.productLanguage,
                condition: etb.condition,
                releaseDate: etb.releaseDate,
                description: etb.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Etb to list failed.`);
        }
    }
}
