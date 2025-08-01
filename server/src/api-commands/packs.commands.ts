// import { PrismaClient } from '@prisma/client';
// import { BaseCommands } from '../api-base/base.commands.js';
// import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/commands.interfaces.js';

// const prisma = new PrismaClient();

// export class PacksCommands extends BaseCommands {
//   public async AddCommand(cmd: IAddCommand): Promise<void> {
//     const payload = {
//       img: cmd.img,
//       productName: cmd.productName,
//       productLanguage: cmd.productLanguage,
//       condition: cmd.condition,
//       releaseDate: cmd.releaseDate,
//       description: cmd.description,
//     };
//     try {
//       await prisma.packs.create({ data: payload });
//       console.info("Packs -> AddCommand succeeded")
//     }
//     catch(error: any){
//       console.error("Packs -> AddCommand failed", error)
//     }
//   };

//   public async UpdateCommand(cmd: IUpdateCommand): Promise<void> {

//   };

//   public async DeleteCommand(cmd: IDeleteCommand): Promise<void> {

//   }
// }


