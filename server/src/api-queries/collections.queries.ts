import { PrismaClient } from "@prisma/client";
import { BaseQueries } from "../api-base/base.queries.js";
import { IDetailQuery, IDetailDTO, IListDTO } from "../api-interfaces/shared-queries.interfaces.js";

const prisma = new PrismaClient();

export class CollectionsQueries extends BaseQueries {
    public async DetailQuery(qry: IDetailQuery): Promise<IDetailDTO> {
        try {
            const collection = await prisma.collections.findUniqueOrThrow({
                where: {
                    id: qry.id,
                },
            });

            const detailDTO: IDetailDTO = {
                img: collection.img,
                productName: collection.productName,
                productLanguage: collection.productLanguage,
                condition: collection.condition,
                releaseDate: collection.releaseDate,
                description: collection.description,
            };

            return detailDTO;
        } catch (error: any) {
            throw new Error(`Collection with ID #${qry.id} not found.`);
        }
    }

    public async ListQuery(): Promise<IListDTO> {
        try {
            const collections = await prisma.collections.findMany();
            const detailDTOs: IDetailDTO[] = collections.map((collection: any) => ({
                img: collection.img,
                productName: collection.productName,
                productLanguage: collection.productLanguage,
                condition: collection.condition,
                releaseDate: collection.releaseDate,
                description: collection.description,
            }));

            const listDTO: IListDTO = {
                items: detailDTOs
            };
            return listDTO;
        } catch (error: any) {
            throw new Error(`Collections to list failed.`);
        }
    }
}
