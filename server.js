const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
app.get('/', (req, res) => res.send('hello'));
app.listen(port, () => console.log(`server listening on port: ${port}`));