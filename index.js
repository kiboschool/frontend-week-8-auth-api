const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors')

const { posts, users } = require('./db')
const { UseJwt } = require('./middlewares')
const { JSON_SECRET_KEY } = require('./secrets')

const app = express();

app.use(express.json());
app.use(cors())

app.post('/session', (req, res) => {
    const { email, password } = req.body;

    // Check if email or password are not submitted
    if (!email || !password) {
        return res.status(422).json({ error: 'Email or password not provided' });
    }

    const user = users.find(user => user.email === email);

    if (!user) {
        return res.status(422).json({ error: 'Cant find user with that email' });
    }


    if (user.password !== password) {
        return res.status(422).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JSON_SECRET_KEY);

    res.json({ token });
});

app.get(`/posts`,
    ...UseJwt(),
    async function (req, res) {
        const userPosts = posts.filter(post => post.userId === req.auth.id);
        res.send(userPosts)
    }
)

app.listen(3000, () => console.log('Server started on port 3000'));

module.exports = app;