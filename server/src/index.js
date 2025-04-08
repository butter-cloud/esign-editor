const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const editorRoutes = require('./routes/editor')

const app = express()
const PORT = 4000

app.use(cors())
app.use(bodyParser.json())

// API 라우터 연결
app.use('/api/editor', editorRoutes)

app.listen(PORT, () => {
  console.log(`@ Server is running at http://localhost:${PORT}`)
})
