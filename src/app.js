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
    const userExists = users.find((user) => user.username === username);
    if (!userExists) {
        users.push({ username, avatar });
        res.status(201).send('OK');
    } else {
        res.status(201).send('OK');
    }
});

app.get('/tweets', (req, res) => {
    res.status(200).send(tweets.slice(-10));
});

app.listen(5000, () => {
    console.log(chalk.bold.green('Server is running on port 5000'));
});
