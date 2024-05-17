const multer = require('multer');
const File = require('../models/File');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage }).single('file');

exports.uploadFile = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            return res.status(400).send(err);
        }
        const newFile = new File({
            filename: req.file.originalname,
            data: req.file.buffer,
            contentType: req.file.mimetype
        });
        try {
            await newFile.save();
            res.redirect('/');
        } catch (error) {
            res.status(400).send(error);
        }
    });
};

exports.getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        res.contentType(file.contentType);
        res.send(file.data);
    } catch (error) {
        res.status(400).send(error);
    }
};
