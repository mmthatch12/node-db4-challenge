
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').insert([
    { ingredients_name: 'Cumin'},
    { ingredients_name: 'Garlic'},
    { ingredients_name: 'Salt'},
    { ingredients_name: 'Water'},
    { ingredients_name: 'Peanuts'},
  ])
};
