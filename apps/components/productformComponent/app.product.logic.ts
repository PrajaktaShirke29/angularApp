import {Product, Products} from "./app.product.model";

export class ProductLogic{
    private products:Array<Product>;

    constructor(){
        this.products=Products;
    }

    getProducts():Array<Product>{
        return this.products;
    }

    saveProducts(p:Product):Array<Product>{
        this.products.push(p);
        return this.products;
    }

    deleteProducts(p:Product):Array<Product>{
        this.products.pop();
        return this.products;
    }

    updateProducts(p:Product):Array<Product>{
        this.products.push(p);
        return this.products;
    }

}