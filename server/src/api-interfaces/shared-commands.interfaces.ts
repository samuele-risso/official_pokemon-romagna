export interface IAddCommand {
  img: string;
  productName: string;
  productLanguage: string;
  condition: string;
  releaseDate: Date;
  description: string;
}

export interface IUpdateCommand {
  id: string;
  img?: string;
  productName?: string;
  productLanguage?: string;
  condition?: string;
  releaseDate?: Date;
  description?: string;
}

export interface IDeleteCommand {
  id: string;
}