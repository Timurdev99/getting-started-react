const users = [
    {
        firstName: 'fname1',
        lastName: 'lname1',
        email: 'abc@gmail.com'
    },
    {
        firstName: 'fname1',
        lastName: 'lname1',
        email: 'abc@gmail.com'
    },
    {
        firstName: 'fname1',
        lastName: 'lname1',
        email: 'abc@gmail.com'
    }
];

export function getUsers() {
    return users;
}

export function addUser(user) {
    return users.push(user);
}
  