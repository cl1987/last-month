const express = require('express')

const router = express.Router()

router.get('/blog',(req,res)=>{
	res.end('get user response data...')
});

router.post('/blog', (req, res) => {
	res.send('post user response data...')
})

router.put('/blog', (req, res) => {
	res.send('put user response data...')
})
router.delete('/blog', (req, res) => {
	res.send('delete user response data...')
})


module.exports = router