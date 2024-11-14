const http = require('http');
const { app } = require('./app.js');
const dotenv = require('dotenv');
const {server} = require('./app.js')

dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("server is running");
});

server.listen(port, () => {
    console.log("running on port: ", port);
});
