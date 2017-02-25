var express = require('express'),
    router = express.Router();

router.get('/api/secure', function (req, res) {
    res.send('Secure endpoint');
});

module.exports = router;