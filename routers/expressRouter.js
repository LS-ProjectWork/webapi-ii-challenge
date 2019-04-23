const express = require('express');
const router = express.Router();

const db = require('./data/db');

router.post('/api/posts', (req, res) => {
    const title = req.body.title;
    const contents = req.body.contents;
    if(title && contents) {
        db.insert()
        .then(post => {
            res.status(201).send(post)
        })
        .catch(() => {
            res.status(500).json({error: 'There was an error while saving the post to the database'})
        })
    } else {
        res.status(400).json({error:'Please provide title and contents for the post'})
    }
});

router.get('/api/posts', (req, res) => {
    newPost = req.body
    db.find(newPost)
    .then(post => {
        res.status(200).json(post)
    })
    .catch(() => {
        res.status(500).json({error: 'The posts information could not be retrieved'})
    })
});

router.get('/api/posts/:id', (req, res) => {
    userId = req.params.id
    if(userId) {
        db.findById(userId)
        .then(id => {
            res.status(200).json(id)
        })
        .catch(() => {
            res.status(500).json({error: 'The post information could not be retrieved'})
        })
    } else {
        res.status(404).json({error: 'The post with the specified ID does not exist'})
    }
})