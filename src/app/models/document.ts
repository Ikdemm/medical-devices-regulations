export interface Document {
    title: string;
    year: number;
    month: number;
    subcategory: string;
    category: string;
    country: "Germany" | "Europe";
    files: Array<string>;
    excel: Array<object>;
    zip: Array<object>;
}