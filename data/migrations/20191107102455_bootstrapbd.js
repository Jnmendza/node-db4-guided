
exports.up = function(knex) {
  return knex.schema
  .createTable('species', tbl => {
      // the type of Primary Key is: integer without negative values, also called unsigned
    tbl.increments(); 

      tbl.string('name', 255).notNullable;
  })
  .createTable('animals', tbl => {
      tbl.increments();

      tbl.string('name', 255).notNullable();

      // define our FK
      tbl.integer('species_id')
      .unsigned()
      .references('id')
      .inTable('species')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') // about changing the value of the primary key table.
  })

  .createTable('zoos', tbl => {
    tbl.increments();

    tbl.string('name').notNullable()
    tbl.string('address')

   
})

  .createTable('animal_zoos', tbl => {
      tbl.increments();

      tbl.integer('zoo_id')
      tbl.integer('animal_id')
      tbl.date('from')
      tbl.date('to')

      tbl.integer('zoo_id')
      .unsigned()
      .references('id')
      .inTable('zoos')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 
      
      tbl.integer('animal_id')
      .unsigned()
      .references('id')
      .inTable('animals')
      .onDelete('RESTRICT') // about deleting the record from the primary key table. Could be `RESTRICT`, `NO ACTION`, ``
      .onUpdate('CASCADE') 

  })

  
};

exports.down = function(knex) {
  return knex.schema
};
