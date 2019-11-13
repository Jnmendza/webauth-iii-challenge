exports.seed = function(knex) {
    return knex('users').insert([
        {username: 'Username1', password: 'pass1'},
        {username: 'Username2', password: 'pass2'},
        {username: 'Username3', password: 'pass3'}
    ])
}