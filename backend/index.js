const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const cors = require('cors');

app.use(express.json());  
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/tasks', require('./routes/tasks'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}); 