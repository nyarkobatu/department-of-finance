const express = require('express');
const multer = require('multer');
const Jimp = require('jimp');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors({
    origin: 'https://dof.lsgov.online',
    credentials: true
}));
app.use(express.static('public'));

app.post('/generate-certificate', upload.none(), async (req, res) => {
    try {
        const { name, date } = req.body;

        // Load the certificate image
        const image = await Jimp.read('sertifika.png');
        const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

        // Replace the text
        image.print(font, 100, 100, name); // x, y koordinatlarını ayarlayın
        image.print(font, 100, 150, date);

        // Save the modified image
        const modifiedImagePath = 'modified_certificate.png';
        await image.writeAsync(modifiedImagePath);

        // Upload to Imgur
        const formData = new FormData();
        formData.append('image', fs.createReadStream(modifiedImagePath));

        const imgurResponse = await axios.post('https://api.imgur.com/3/image', formData, {
            headers: {
                ...formData.getHeaders(),
                Authorization: `Client-ID 9c16f670786e6a5`
            }
        });

        const imageUrl = imgurResponse.data.data.link;
        res.json({ imageUrl });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});