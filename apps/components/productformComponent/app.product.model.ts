export class Product{
    constructor(
       // public flag: boolean,
        public ProductId:number,
        public ProductName:string,
        public CategoryName:string,
        public Price:number
       
    ){}

}

export const Categories=["Electronics","Electrical","Food"];
export const Products:Array<Product>=new Array <Product>();

Products.push(new Product( 101,"Laptop","Electronics",12000));
Products.push(new Product( 102,"Iron","Electrical",1200));
Products.push(new Product(103,"Biscuits","Food",120));
