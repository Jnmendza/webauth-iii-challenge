exports.seed = function(knex) {
    return knex('users').insert([
        {username: 'Username1', password: 'pass1', department: 'Dev'},
        {username: 'Username2', password: 'pass2', department: 'IT'},
        {username: 'Username3', password: 'pass3', department: 'Graphics'}
    ])
}