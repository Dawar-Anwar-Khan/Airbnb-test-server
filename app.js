const path = require('path')

const express = require('express')
const userRouter = require('./routes/userRouter')
const hostRouter = require('./routes/hostRouter')
const rootDir = require('./utils/pathUtil')
// body parser
// const bodyParser = require('body-parser')
const app = express()

app.use(express.urlencoded())
app.use(userRouter)
app.use(hostRouter)

// body parser
// app.use(bodyParser.urlencoded())

app.use((req,res,next) => {
    console.log(req.url,req.method);
    res.status(404).sendFile(path.join(rootDir, "views", "404page.html"))
}
)

const port = 3005
app.listen(port, () => {
    console.log(`your address is http://localhost:${port}`);
})