let BasePunchStarter = require('./base-punch-starter.js');

class FoodPunchStarter extends BasePunchStarter {
    constructor(id, name, manufacturer, description, genres, targetPrice, ingredients, recipe) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._ingredients = validateIngredients(ingredients);
        this._recipe = validateRecipe(recipe);
    }

    get ingredients(){
        return this._ingredients;
    }
    get recipe() {
        return this._recipe;
    }
}

function validateIngredients(ingredients) {
    if (ingredients.constructor.name === 'Array') {
        for (let item of ingredients) {
            if (typeof item != 'string') {
                throw new TypeError('Invalid ingredients format!');
            }
        }
        return ingredients;
    }
    throw new TypeError("Invalid ingredients format!");
}

function validateRecipe(recipe) {
    if (typeof recipe == 'string' && recipe != '') {
        return recipe;
    }
    throw new TypeError("Invalid ingredients format!");
}

module.exports = FoodPunchStarter;