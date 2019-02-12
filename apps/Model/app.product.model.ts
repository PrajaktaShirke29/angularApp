export class Product{
    constructor(
       // public flag: boolean,
     //  public Selection:boolean,
        public _id: string,
        public ProductId:number,
        public ProductName:string,
        public Category:string,
        public Manufacturer:string,
        public Price:number
       
    ){}
};


export const Categories=["Electronics","Electrical","Food"];
export const Products:Array<Product>=new Array <Product>();

