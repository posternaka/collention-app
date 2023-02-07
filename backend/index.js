const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

const start = async () => {
    try {
        server.listen(PORT, () => {
            console.log('Success server')
        });
    } catch (error) {
        console.log(error);
    }
}

start();