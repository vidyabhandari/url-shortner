const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {nanoid} = require('nanoid');
const url = require('./models/Url');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MnogoDB connected"))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));n

