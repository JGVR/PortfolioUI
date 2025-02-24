import CategoryFilters from '@/models/category-filters';

export default interface IFilterDropdown{
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    categoryFilters: Array<CategoryFilters>;
    selectedFilters: Array<string>;
    setSelectedFilters: React.Dispatch<React.SetStateAction<Array<string>>>;
}