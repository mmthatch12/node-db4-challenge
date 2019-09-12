
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').insert([
    { recipe_id: 1, ingredients_id: 3, quantity: '2 quarts'},
    { recipe_id: 1, ingredients_id: 1, quantity: '12 parsecs'},
    { recipe_id: 1, ingredients_id: 5, quantity: '30 pieces'},
    { recipe_id: 2, ingredients_id: 2, quantity: '1 cup'},
    { recipe_id: 2, ingredients_id: 4, quantity: '39 quarts'},
    { recipe_id: 2, ingredients_id: 3, quantity: '78 drips'},
  ])

};
