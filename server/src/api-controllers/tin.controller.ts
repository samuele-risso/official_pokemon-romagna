// @ts-ignore
import { Request, Response } from 'express';
import { TinCommands } from '../api-commands/tin.commands.js';
import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/shared-commands.interfaces.js';
import { BaseControllers } from '../api-base/base.controllers.js';

export class TinController extends BaseControllers {
      public async GetById(req: Request, res: Response): Promise<void> {
        try {

        } catch (error) {

        }
      }

      public async GetAll(req: Request, res: Response): Promise<void> {
        try {

        } catch (error) {

        }
      }

    public async Add(req: Request, res: Response): Promise<void> {
        const istance = new TinCommands()

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
            res.status(201).json({ message: 'Tin added successfully.' });
        } catch (error: any) {
            res.status(500).json({ message: 'Internal server error.' });
        }
    }

    public async Update(req: Request, res: Response): Promise<void> {
        const istance = new TinCommands()
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
        const istance = new TinCommands()
        const payload: IDeleteCommand = req.body;

        try {
            await istance.DeleteCommand({ id: payload.id });
            res.status(200).json({ message: 'Card deleted successfully.' });
        } catch (error: any) {
            console.error('Error deleting card:', error);
            res.status(500).json({ message: 'Internal server error.' });
        }
    }
}