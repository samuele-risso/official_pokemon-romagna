"use strict";
// import { Response, Request } from 'express';
// import { CollectionsCommands } from "../api-commands/collections.commands.js";
// import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/commands.interfaces.js';
// import { BaseControllers } from '../api-base/base.controllers.js';
Object.defineProperty(exports, "__esModule", { value: true });
// export class CollectionsController extends BaseControllers{
//       public static async GetById(req: Request, res: Response): Promise<void> {
//         const productId = parseInt(req.params.id);
//         try {
//           let card = CardQueries.Query()
//         } catch (error) {
//         }
//       }
//       public static async GetAll(req: Request, res: Response): Promise<void> {
//         try {
//         } catch (error) {
//         }
//       }
//     public async Add(req: Request, res: Response): Promise<void> {
//         const istance = new CollectionsCommands()
//         const payload: IAddCommand = {
//             img: req.body.img,
//             productName: req.body.productName,
//             productLanguage: req.body.productLanguage,
//             releaseDate: req.body.releaseDate,
//             condition: req.body.condition,
//             description: req.body.description
//         }
//         try {
//             await istance.AddCommand(payload);
//             res.status(201).json({ message: 'Collection added successfully.' });
//         } catch (error: any) {
//             res.status(500).json({ message: 'Internal server error.' });
//         }
//     }
//     public async Update(req: Request, res: Response): Promise<void> {
//         const istance = new CollectionsCommands()
//         const payload: IUpdateCommand = req.body;
//         try {
//             await istance.UpdateCommand({
//                 id: payload.id,
//                 img: payload.img,
//                 productName: payload.productName,
//                 productLanguage: payload.productLanguage,
//                 condition: payload.condition,
//                 releaseDate: payload.releaseDate,
//                 description: payload.description,
//             });
//             res.status(200).json({ message: 'Card updated successfully.' });
//         } catch (error: any) {
//             console.error('Error updating card:', error);
//             res.status(500).json({ message: 'Internal server error.' });
//         }
//     }
//     public async Delete(req: Request, res: Response): Promise<void> {
//         const istance = new CollectionsCommands()
//         const payload: IDeleteCommand = req.body;
//         try {
//             await istance.DeleteCommand({ id: payload.id });
//             res.status(200).json({ message: 'Card deleted successfully.' });
//         } catch (error: any) {
//             console.error('Error deleting card:', error);
//             res.status(500).json({ message: 'Internal server error.' });
//         }
//     }
// }
