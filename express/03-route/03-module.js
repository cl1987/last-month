const express = require('express');
// const userRouter = require('./routers/user.js')
// const blogRouter = require('./routers/blog.js')

const app = express();

const port = 3000

app.use(express.static('public'))

// app.use('/user',userRouter)
// app.use('/blog',blogRouter)
// 
app.use('/users',require('./routers/users.js'))
app.use('/blogs',require('./routers/blogs.js'))

app.listen(port, () => console.log(`app listening on port ${port}!`))