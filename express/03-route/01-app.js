const express = require('express')
const app = express()
const port = 3000
app.use(express.static('public'))


app.get('/', (req, res) => res.send('get  qing  qiu'))
app.post('/post', (req, res) => res.send('post  qing  qiu'))
app.put('/put', (req, res) => res.send('put  qing  qiu'))
app.delete('/delete', (req, res) => res.send('delete  qing  qiu'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))