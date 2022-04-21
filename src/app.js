import express from 'express';
import cors from 'cors';
import chalk from 'chalk';

const app = express();
app.use(express.json());
app.use(cors());

const users = [
    {
        username: 'bobesponja',
        avatar: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
    },
];

const tweets = [
    {
        username: 'bobesponja',
        avatar: 'https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info',
        tweet: 'eu amo o hub',
    },
];

app.post('/sign-up', (req, res) => {
    const { username, avatar } = req.body;
    if (!username || !avatar) {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        const userExists = users.find((user) => user.username === username);
        if (!userExists) {
            users.push({ username, avatar });
            res.status(201).send('OK');
        } else {
            res.status(201).send('OK');
        }
    }
});

app.post('/tweets', (req, res) => {
    // console.log(req.headers);
    const { tweet } = req.body;
    const username = req.headers.user;
    if (!username || !tweet) {
        res.status(400).send('Todos os campos são obrigatórios!');
    } else {
        const avatar = users.find((user) => user.username === username).avatar;
        tweets.push({ username, avatar, tweet });
        res.status(201).send('OK');
    }
});

app.get('/tweets', (req, res) => {
    res.status(200).send(tweets.slice(-10).reverse());
});

app.get('/tweets/:user', (req, res) => {
    const { user } = req.params;
    const tweetsUser = tweets.filter((tweet) => tweet.username === user);
    res.status(200).send(tweetsUser);
});

app.listen(5000, () => {
    console.log(chalk.bold.green('Server is running on port 5000'));
});
