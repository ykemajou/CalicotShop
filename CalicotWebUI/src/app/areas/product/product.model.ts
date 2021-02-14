import { Byte } from "@angular/compiler/src/util";
import { v4 as uuidv4 } from "uuid";

export class ProductModel {

    id: number;
    guid: string;
    name: string;
    description: string;
    price: number | null;
    picture: Byte[] | null;

    constructor(id: number, name: string, description: string, price?: number) {
        this.id = id;
        this.guid = uuidv4();
        this.name = name;
        this.description = description;
        this.price = price ? price : null;
        this.picture = null;
    }
}