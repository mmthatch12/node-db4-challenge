
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('recipe_name', 255).unique().notNullable()
    })
    .createTable('steps', tbl => {
        tbl.increments();
        
    })
    .createTable('recipe_ingredients', tbl => {})
    .createTable('ingredients', tbl => {})
};

exports.down = function(knex) {
  
};
