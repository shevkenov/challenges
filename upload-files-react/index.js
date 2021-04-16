const express = require('express');
const cors = require('cors');
const upload = require('multer')();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.post("/upload", upload.single("file"), (req, res) => {
    const file = req.files;

    res.json({success: true})
})

app.listen(port, () => {
    console.log(`The server is listening on ${port}`);
})