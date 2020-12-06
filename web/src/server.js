const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

const pages = {
   landing: (req, res) => {
      return res.render("index.html")
   },
   signUp: (req, res) => {
      return res.render("sign-up.html")
   },
}

nunjucks.configure("src/views/", {
   express: server,
   noCache: true,
})

server
   .use(express.static("public"))

   .get("/", pages.landing)
   .get("/criar-conta", pages.signUp)

   .listen(5500)

console.log("Server online!")
