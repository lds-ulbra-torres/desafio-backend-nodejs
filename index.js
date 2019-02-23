const express = require('express')
// Instance Express in app
const app = express()
const port = process.env.PORT || 3000
// Initialize Server
app.listen(port, () => {
    console.log(`Server linsten port ${port}`)
})