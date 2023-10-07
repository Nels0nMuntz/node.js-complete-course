import fs from "fs"
import http from "http"

const PORT = 5000;

const server = http.createServer((req, res) => {
  if(req.url === "/" && req.method === "GET") {
    const filePath = "./files/index.html"
    const readStream = fs.createReadStream(filePath)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    readStream.pipe(res)
  }
})

server.listen(PORT, () => {
  console.log(`Server is launched on port ${PORT}`);
})