const express = require("express")
const app = express()

const PORT = process.env.PORT || 6000

app.get("/", (req, res) => {
    res.send("hellloo bhadwe")
})

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`${PORT} Connected Brother`)
        })
    } catch (error) {
        console.log(error)
    }
}


start();