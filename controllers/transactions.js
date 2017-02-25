var express = require('express'),
    router = express.Router();


router.get('/api/transaction', function(req, res) {
    res.status(200).json({message: 'Get all transactions'});
});

router.get('/api/transaction/:id', function(req, res) {
    var message = 'Get Transaction Id: ' + req.params.id;
    res.status(200).json({message: message});
})

router.post('/api/transaction', function(req, res) {
    res.status(200).json({message: 'Add transaction'});
});

router.put('/api/transaction', function(req, res) {
    res.status(200).json({message: 'Update transaction'});
});

router.delete('/api/transaction', function(req, res) {
    res.status(200).json({message: 'Delete transaction'});
});

module.exports = router;