const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getSingleIngred
}

function getRecipes() {
    //should return a list of all recipes in the database.
    return db('recipes')
        .then(recipes => {
            return recipes
        })
}

function getShoppingList(id) {
    //should return a list of all ingredients and quantities for a given recipe
    return db('recipes as r')
        .join('recipe_ingredients as ri', 'r.id', '=', 'ri.recipe_id')
        .where({ recipe_id: id})
        .join('ingredients as i', 'ri.ingredients_id', '=', 'i.id' )
        .select('recipe_name as recipe', 'ingredients_name as ingredient', 'quantity')
        .then(recipe => {
            if(recipe){
                return recipe
            } else {
                return null
            }
        })    
}

function getInstructions(id) {
    //should return a list of step by step instructions for preparing a recipe
    return db('recipes as r')
        .join('steps as s', 'r.id', '=', 's.recipe_id')
        .where({ recipe_id: id})
        .select('recipe_name as recipe', 'step_number as step', 'instructions')
        .then(recipe => {
            if(recipe){
                return recipe
            } else {
                return null
            }
        })
}

function getSingleIngred(id) {
    return db('ingredients as i')
        .join('recipe_ingredients as ri', 'i.id', '=', 'ri.ingredients_id')
        .where({ ingredients_id: id})
        .then(ingredient => {
            if(ingredient) {
                return ingredient
            } else {
                return null
            }
        })
}