import { Request, Response } from "express";

export abstract class BaseControllers {
  public abstract GetById(req: Request, res: Response): Promise<void>;
  public abstract GetAll(req: Request, res: Response): Promise<void>;
  public abstract Add(req: Request, res: Response): Promise<void>;
  public abstract Update(req: Request, res: Response): Promise<void>;
  public abstract Delete(req: Request, res: Response): Promise<void>;
}