const express = require('express')
const app = express()
const helmet = require('helmet')
const port = 3000

app.use(helmet())
app.use(express.static('public'))

app.listen(process.env.PORT || 3000, () => console.log(`Example app listening at http://localhost:${port}`))