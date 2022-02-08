import Publisher from "../common/publisher.js";
import CategoryModel from "./category_model.js";
import CategoryView from "./category_view.js";

export default class CategoryController {

    constructor() {
        this.view = new CategoryView(
            this.clickCategories, 
            this.clickDogTypes, 
            this.filterByCatsGender, 
            this.filterByDogsGender, 
            this.filterCatsByMadness,
            this.filterRodents,
            this.priceDown,
            this.priceUp);
        this.model = new CategoryModel();
    }

    clickCategories = async (event) => {
        const value = event.target.attributes['data-category'].value;
        const data = await this.model.getProductsByCategory(value);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    clickDogTypes = async (event) => {
        const value = event.target.attributes['data-dog-type'].value;
        const data = await this.model.getDogsByType(value);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    filterByCatsGender = async (event) => {
        const val = event.target.attributes['data-cats-gender'].value;
        const data = await this.model.getCatsByGender(val);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    filterByDogsGender = async (event) => {
        const val = event.target.attributes['data-dogs-gender'].value;
        const data = await this.model.getDogsByGender(val);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    filterCatsByMadness = async (event) => {
        const val = event.target.attributes['data-madness'].value;
        const data = await this.model.getCatsByMadness(val);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    filterRodents = async (event) => {
        const val = event.target.attributes['data-rodent-type'].value;
        const data = await this.model.getRodentsByType(val);
        console.log(data);
        Publisher.notify(Publisher.events.sortedData, data);
    }

    priceDown = async () => {
        const data = await this.model.getData();
        const sortedData = this.model.sortByPriceDown(data);
        Publisher.notify(Publisher.events.sortedData, sortedData);
      };
    
    priceUp = async () => {
        const data = await this.model.getData();
        const sortedData = this.model.sortByPriceUp(data);
        Publisher.notify(Publisher.events.sortedData, sortedData);
      };
}