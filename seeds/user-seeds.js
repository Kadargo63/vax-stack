const { User } = require('../models');

const userData = [{
    id: 1,
    first_name: 'Pablo',
    last_name: 'Chacon',
    phone: '8675309',
    dob: '12041987',
    address: '123 That Place',
    email: 'that@that.com',
    password: 'MM123'
},
{
    id: 2,
    first_name: 'Maria',
    last_name: 'Milano',
    phone: '5481585',
    dob: '08221982',
    address: '345 This Place',
    email: 'this@that.com',
    password: '4ur84ww'
},
{
    id: 2,
    first_name: 'Timmy',
    last_name: 'Gogo',
    phone: '8456352',
    dob: '06181976',
    address: '678 Their Place',
    email: 'these@that.com',
    password:'kissrocks123'
}
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;