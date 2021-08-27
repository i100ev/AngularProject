
export interface ICloth {
    id: string;
    title: string;
    description: string;
}

export interface NewClothDialogData {
    cloth: Partial<ICloth>;
    enableDelete: boolean;
}

export interface ClothDialogResult {
    cloth: ICloth;
    delete?: boolean;
}
