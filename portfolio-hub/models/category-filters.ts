import Category from "./category";
import Filter from "./filter";

export default class CategoryFilters{
    category: Category;
    filters: Array<Filter>;

    constructor(category: Category, filters: Array<Filter>){
        this.category = category;
        this.filters = filters;
    }
}