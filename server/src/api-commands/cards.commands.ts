import { PrismaClient } from '@prisma/client';
import { BaseCommands } from '../api-base/base.commands.js';
import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/shared-commands.interfaces.js';

const prisma = new PrismaClient();

export class CardsCommands extends BaseCommands {
  public async AddCommand(cmd: IAddCommand): Promise<void> {
    try {
      await prisma.cards.create({
        data: {
          img: cmd.img,
          productName: cmd.productName,
          productLanguage: cmd.productLanguage,
          condition: cmd.condition,
          releaseDate: cmd.releaseDate,
          description: cmd.description,
        }
      });
      console.info("Cards -> AddCommand succeeded")
    }
    catch (error: any) {
      console.error("Cards -> AddCommand failed", error)
    }
  };

  public async UpdateCommand(cmd: IUpdateCommand): Promise<void> {
    try {
      await prisma.cards.update({
        where: {
          id: cmd.id,
        },
        data: {
          img: cmd.img,
          productName: cmd.productName,
          productLanguage: cmd.productLanguage,
          condition: cmd.condition,
          releaseDate: cmd.releaseDate,
          description: cmd.description,
        }
      })
      console.info("Cards -> AddCommand succeeded")
    } catch (error: any) {
      console.error("Cards -> UpdateCommand failed", error)
    }
  };

  public async DeleteCommand(cmd: IDeleteCommand): Promise<void> {
    try {
      await prisma.cards.delete({
        where: {
          id: cmd.id,
        }
      })
      console.info("Cards -> DeleteCommand succeeded")
    } catch (error: any) {
      console.error("Cards -> DeleteCommand failed", error)
    }
  };
}


