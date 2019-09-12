
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').insert([
    { recipe_id: 1, step_number: 1, instructions: 'Mix in all ingredients'},
    { recipe_id: 1, step_number: 2, instructions: 'Unmix all ingredients'},
    { recipe_id: 1, step_number: 3, instructions: 'Bake all ingredients'},
    { recipe_id: 2, step_number: 1, instructions: '2 mix in all ingredients'},
    { recipe_id: 2, step_number: 2, instructions: 'run ten miles with ingredients'},
    { recipe_id: 2, step_number: 3, instructions: 'bake and eat'}
  ])

};
