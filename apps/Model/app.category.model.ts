export class Category{
    constructor(
        public categoryId:number,
        public categoryName:string
    ){}
}
 
export const Categories = [
    {categoryId:101,categoryName:'Electrical'},
    {categoryId:102,categoryName:'Electronics'},
    {categoryId:103,categoryName:'Household'},
    {categoryId:104,categoryName:'Food'}
];