
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
      tbl.string('quant', 255).notNullable();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();
  })

  .createTable('recipe_ingredients', tbl => {

    tbl.increments();

    
    tbl
    .integer('recipe_id')
    .unsigned()
    .references('id')
    .inTable('recipe')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
  tbl
    .integer('ingredient_id')
    .unsigned()
    .references('id')
    .inTable('ingredients')
    .onDelete('RESTRICT')
    .onUpdate('CASCADE');
  })
};

exports.down = function(knex) {
    // drop tables in reverse order when using foreign keys
  return knex.schema
  .dropTableIfExists('recipe_ingredients')
  .dropTableIfExists('ingredients')
  .dropTableIfExists('recipe');
  
  
};
