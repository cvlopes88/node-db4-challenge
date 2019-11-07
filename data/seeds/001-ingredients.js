
exports.seed = function(knex) {
 
      return knex('ingredients').insert([
        { name: 'flower'},
        { name: 'milk'},
        { name: 'eggs'}
      ]);
   
};
