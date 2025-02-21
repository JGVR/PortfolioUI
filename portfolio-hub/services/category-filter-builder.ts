import Category from "@/models/category";
import CategoryFilters from "@/models/category-filters";
import Filter from "@/models/filter";

export default class CategoryFilterBuilder{

    //builds a category filter objects or an array of category filter objects
    static build(category: string, filters: Set<string>): CategoryFilters{
        //create category for filters
        const categoryFilter = new Category(category);

        //create filters
        let filterObjects: Array<Filter> = [];

        for (const filter of filters){
            filterObjects.push(new Filter(filter));
        };

        return new CategoryFilters(categoryFilter, filterObjects);
    }
}