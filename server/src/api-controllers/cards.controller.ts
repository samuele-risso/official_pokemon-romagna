// @ts-ignore
import { Response, Request } from 'express';
import { BaseControllers } from '../api-base/base.controllers.js';
import { CardsCommands } from "../api-commands/cards.commands.js";
import { IAddCommand, IUpdateCommand, IDeleteCommand } from "../api-interfaces/commands.interfaces.js"
import { CardsQueries } from '../api-queries/cards.queries.js';
import { IDetailResponse, IListResponse } from '../api-interfaces/responses.interfaces.js';


export class CardsController extends BaseControllers {
  public async GetById(req: Request, res: Response): Promise<void> {
    const istance = new CardsQueries();
    const cardId: string = req.params.id;

    if (!cardId) {
      res.status(400).json({ message: 'Card ID is required.' });
      return;
    }

    try {
      const card = await istance.DetailQuery({ id: cardId });

      if (!card) {
        res.status(404).json({ message: 'Card not found.' });
        return;
      }

      const response: IDetailResponse = {
        img: card.img,
        productName: card.productName,
        productLanguage: card.productLanguage,
        condition: card.condition,
        releaseDate: card.releaseDate,
        description: card.description,
      };
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  public async GetAll(req: Request, res: Response): Promise<void> {
    const istance = new CardsQueries();
    try {
      const cards = await istance.ListQuery(); 

      if (!cards || !cards.items) {
        res.status(200).json({ items: [] });
        return;
      }

      const response: IListResponse = {
        items: cards.items,
      };
      res.status(200).json(response);
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  public async Add(req: Request, res: Response): Promise<void> {
    const istance = new CardsCommands();

    const payload: IAddCommand = {
      img: req.body.img,
      productName: req.body.productName,
      productLanguage: req.body.productLanguage,
      releaseDate: req.body.releaseDate,
      condition: req.body.condition,
      description: req.body.description
    }
    try {
      await istance.AddCommand(payload);
      res.status(201).json({ message: 'Card added successfully.' });
    } catch (error: any) {
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  public async Update(req: Request, res: Response): Promise<void> {
    const istance = new CardsCommands()
    const payload: IUpdateCommand = req.body;

    try {
      await istance.UpdateCommand({
        id: payload.id,
        img: payload.img,
        productName: payload.productName,
        productLanguage: payload.productLanguage,
        condition: payload.condition,
        releaseDate: payload.releaseDate,
        description: payload.description,
      });
      res.status(200).json({ message: 'Card updated successfully.' });
    } catch (error: any) {
      console.error('Error updating card:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }

  public async Delete(req: Request, res: Response): Promise<void> {
    const istance = new CardsCommands()
    const payload: IDeleteCommand = { id: req.params.id }

    try {
      await istance.DeleteCommand({ id: payload.id });
      res.status(200).json({ message: 'Card deleted successfully.' });
    } catch (error: any) {
      console.error('Error deleting card:', error);
      res.status(500).json({ message: 'Internal server error.' });
    }
  }
}