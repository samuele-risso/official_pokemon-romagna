export interface IAddOrUpdateRequest {
    id?: string;
    img: string | null;
    productName: string;
    productLanguage: string;
    condition: string;
    releaseDate: Date | null;
    description: string;
}

export interface IDeleteRequest {
    id: string
}