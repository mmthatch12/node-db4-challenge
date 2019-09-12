
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {
      recipe_name: "Mom's favorite test!",
    },
    {
      recipe_name: "Dad's favorite test!",
    },
  ])
};
