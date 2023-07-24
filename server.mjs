
import express from 'express';
const app = express();
import { nanoid } from 'nanoid'
import path from 'path';
const __dirname = path.resolve();


app.use(express.json()); // body parser
// not recommended at all - server should be stateless
let posts = [
    {
        id: nanoid(),
        title: "abc post title",
        text: "some post text"
    }
]

// POST    /api/v1/post
app.post('/post', (req, res, next) => {
    console.log('this is signup!', new Date());

    if (
        !req.body.title
        || !req.body.text
    ) {
        res.status(403);
        res.send(`required parameters missing, 
        example request body:
        {
            title: "abc post title",
            text: "some post text"
        } `);
        return;
    }

    posts.push({
        id: nanoid(),
        title: req.body.title,
        text: req.body.text,
    })

    posts.reverse();

    res.send('post created');
})
// GET     /api/v1/posts
app.get('/posts', (req, res, next) => {
    console.log('this is signup!', new Date());
    posts.reverse();
    res.send(posts);
})

// GET     /api/v1/post/:postId
app.get('/post/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());

    if (isNaN(req.params.postId)) {
        res.status(403).send(`post id must be a valid number, no alphabet is allowed in post id`)
    }

    for (let i = 0; i < posts.length; i++) {
        if (posts[i].id === Number(req.params.postId)) {
            res.send(posts[i]);
            return;
        }
    }
    res.send('post not found with id ' + req.params.postId);
})

// PUT     /api/v1/post/:userId/:postId
app.put('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// DELETE  /api/v1/post/:userId/:postId
app.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})