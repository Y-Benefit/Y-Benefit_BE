const express = require('express');
const router = express.Router();
const freeMiddleware = require('../middleware/free-middleware');

const { curationpage, folderpage } = require('../controller/curation');

router.get('/curation/main/:sort', freeMiddleware, curationpage);
router.get('/curation/:folderId', freeMiddleware, folderpage);

module.exports = router;