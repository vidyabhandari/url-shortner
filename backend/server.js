const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const {nanoid} = require('nanoid');
const url = require('./models/Url');
const Url = require('./models/Url');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MnogoDB connected"))
  .catch(err => console.error(err));

  app.post('/api/shorten',async (req, res) => {
    const {longUrl} = req.body;
    if(!longUrl) return res.status(400).json({error: 'URL is required'});

    let shortcode = nanoid(6);

    let existing = await Url.findOne({longUrl});
    if(existing) return res.json ({shortUrl: `${process.env.BASE_URL}/${existing.shortcode}`});
    
    const newUrl = new Url({longUrl, shortcode});
    await newUrl.save();
    res.json({shortUrl: `${process.env.BASE_URL}/${shortcode}`});
});

app.get('/:shortcode',async (req,res) => {
    const {shortcode} = req.params;
    const url = await Url.findOne({shortcode});
    if(!url) return res.status(404).json({error: 'Not found'});

    url.clicks +=1;
    await url.save();
    res.redirect(url.longUrl);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

