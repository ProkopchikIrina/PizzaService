import {action, observable} from "mobx";

const INGREDIENTS_URL = 'api/ingredients';

/**
 * Store for working with ingredients
 */
export default class IngredientStore {
    /**
     * Contains stored ingredients
     * @type {Array}
     */
    @observable
    ingredients = [];

    @observable
    selectedIngredients = [];
    /**
     * Saves new ingredient
     * @param ingredientDetails
     */
    create(ingredientDetails) {
        console.log(ingredientDetails);
        const params = {
            method : 'POST',
            body   : JSON.stringify(ingredientDetails),
            headers: {'Content-Type': 'application/json'}
        };
        fetch(INGREDIENTS_URL, params)
            .then(response => response.json())
            .then(action(ingredient => this.ingredients.push(ingredient)))
            .catch(error => console.log(error));
    }

    /**
     * Load all ingredients
     */
    loadAll() {
        fetch(INGREDIENTS_URL)
            .then(response => response.json())
            .then(action(ingredients => this.ingredients = ingredients))
            .catch(error => console.error(error.message))
    }

    /**
     * Deletes ingredient by id
     * @param id
     */
    delete(id) {
        fetch(INGREDIENTS_URL + "/" + id, {method: 'DELETE'})
            .then(() => this.deleteHandler(id))
            .catch(error => console.error(error.message))
    }

    /**
     * Deletes ingredient from ingredients array by id
     * @param id
     */
    @action
    deleteHandler(id) {
        const itemIndex = this.ingredients.findIndex(({id}) => id === id);
        if (itemIndex > -1) {
            this.ingredients.splice(itemIndex, 1);
        }
    }

    @action
    removeFromSelected(itemId) {
        const itemIndex = this.selectedIngredients.findIndex(({ingredient:{id}}) => id === itemId);
        if (itemIndex > -1) {
            this.selectedIngredients.splice(itemIndex, 1);
        }
        console.log(this.selectedIngredients);
    }

    @action
    addToSelected(ingredient) {
        this.selectedIngredients.push(ingredient);
        console.log(this.selectedIngredients);
    }
}
