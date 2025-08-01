// import { PrismaClient } from '@prisma/client';
// import { BaseCommands } from '../api-base/base.commands.js';
// import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/commands.interfaces.js';

// const prisma = new PrismaClient();

// export class TinCommands extends BaseCommands {
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
//       await prisma.tin.create({ data: payload });
//       console.info("Tin -> AddCommand succeeded")
//     }
//     catch(error: any){
//       console.error("Tin -> AddCommand failed", error)
//     }
//   };

//   public async UpdateCommand(cmd: IUpdateCommand): Promise<void> {

//   };

//   public async DeleteCommand(cmd: IDeleteCommand): Promise<void> {

//   }
// }


