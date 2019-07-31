const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))


app.all('/',(req,res,next)=>{
	console.log('do something....')
	next()
},)


app.get('/', (req,res,next)=>{
	console.log('do something....')
})




app.post('/post', (req, res) => res.send('post  qing  qiu'))
app.put('/put', (req, res) => res.send('put  qing  qiu'))
app.delete('/delete', (req, res) => res.send('delete  qing  qiu'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))