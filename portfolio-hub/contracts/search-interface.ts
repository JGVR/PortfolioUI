import CategoryFilters from "@/models/category-filters";

export default interface ISearch{
    filters: Array<CategoryFilters>;
    text: string;
}