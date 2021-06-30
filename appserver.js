const express = require("express")
    , app = express()
    , port = process.env.port || 3000

app.get("/*", async (req,res) => {
    await res.send("You just got served by port: " + port)
})

app.listen(port, async () => {
        await console.log("App server listening on port: " + port)
})