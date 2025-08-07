export interface IDetailQuery {
    id: string;
}

export interface IDetailDTO {
    img: string;
    productName: string;
    productLanguage: string | null;
    condition: string | null;
    releaseDate: Date | null;
    description: string | null;
}

export interface IListDTO {
    items: IDetailDTO[];
}