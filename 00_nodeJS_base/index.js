import { createServer } from "node:http";

let htmlBody = "<div>Poisson</div>";
htmlBody += "<div>Poulet</div>";
htmlBody += "<div>Raton</div>";
htmlBody += "<div>Croustilles</div>";

const server = createServer((req, res) => {
  let htmlByRequest = "<p>Bienvenu a " + req.url + " </p>";

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(htmlByRequest + htmlBody);
});

// starts a simple http server locally on port 3000
server.listen(3000, "127.0.0.1", (c) => {
  console.log("Listening on 127.0.0.1:3000");
});
