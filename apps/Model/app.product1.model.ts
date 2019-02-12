export class Product{
    constructor(
        public productId:number,
        public productName:string,
        public productPrice:number,
        public categoryName:string
    ){}
}
 
export const Products = [
    {productId:10001,productName:'Iron',productPrice:2000,categoryName:'Electrical'},
    {productId:10002,productName:'Laptop',productPrice:80000,categoryName:'Electronics'},
    {productId:10003,productName:'TV',productPrice:22000,categoryName:'Household'},
    {productId:10004,productName:'Rice',productPrice:2000,categoryName:'Food'},
    {productId:10005,productName:'Heater',productPrice:900,categoryName:'Electrical'},
    {productId:10006,productName:'Router',productPrice:3000,categoryName:'Electronics'},
    {productId:10007,productName:'Fridge',productPrice:25000,categoryName:'Household'},
    {productId:10008,productName:'Veg. Oil',productPrice:1000,categoryName:'Food'}
];