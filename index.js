const express =  require('express');
const server = express();

server.listen(5000, (res, req) => {
    console.log('Server is fired up on port 5000!')
})

server.use('/', (req, res) => {
    res.status(200).send('Welcome to my project');
})

