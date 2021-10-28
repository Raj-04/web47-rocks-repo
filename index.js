require('dotenv').config()
const path = require('path')
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client/build')))
const PORT =  process.env.PORT || 5000

app.get('/api/foo', (req, res) => {
    res.json({ message: 'hello there!'})
})

app.get('*', (req, res) => {
    res.sentFile(path.join(__dirname, 'client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})

