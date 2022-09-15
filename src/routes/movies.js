const { Router } = require('express');
const router = Router();
 
router.get('/movies', (req, res) => {
    res.json([
        {
            id: 1,
            name: "Nobody"
        },
        {
            id:2,
            name: "Dr No 1962"
        }
    ]);
})

 
module.exports = router;