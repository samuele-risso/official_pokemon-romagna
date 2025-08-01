import { Request, Response, NextFunction } from 'express';

export const successHandler = (req: Request, res: Response, next: NextFunction) => {
  if (res.locals.data !== undefined) { 
    res.status(res.locals.statusCode || 200).json(res.locals.data);
  } else if (res.locals.message) {
    res.status(res.locals.statusCode || 200).json({ message: res.locals.message });
  } else {
    if (!res.headersSent) { 
      res.status(204).send();
    }
  }
};