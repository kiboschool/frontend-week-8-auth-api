const users = [
    {
        id: 1,
        email: 'coolemail@gmail.com',
        password: '123123'
    },
    {
        id: 2,
        email: 'anotheremail@gmail.com',
        password: '098098'
    },
];

const posts = [
    {
        id: 1,
        title: 'First Post',
        content: 'This is the first post.',
        userId: 1
    },
    {
        id: 2,
        title: 'Second Post',
        content: 'This is the second post.',
        userId: 2
    },
];

module.exports = { users, posts }