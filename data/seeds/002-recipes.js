
exports.seed = function(knex) {
  
      return knex('recipe').insert([
        { name: 'bread', quant: '20g'},
        { name: 'pizza', quant: '10g'},
        { name: 'cake', quant: '5g'}
      ]);
    
};