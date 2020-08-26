const express = require('express');
const app = express();
const path = require('path');

require('./config/config');

app.use(express.static(path.resolve(__dirname, 'public')));

app.listen(process.env.PORT, () => {
    console.log("server up");
})