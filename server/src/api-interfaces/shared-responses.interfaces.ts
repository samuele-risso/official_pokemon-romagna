export interface IDetailResponse {
    img: string;
    productName: string;
    productLanguage: string | null;
    condition: string | null;
    releaseDate: Date | null;
    description: string | null;
}

export interface IListResponse {
    items: IDetailResponse[];
}