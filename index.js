const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const chalk = require('chalk')

const server = http.createServer( (req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');
   res.end('Hello World\n');
});

server.listen(port, hostname, () => {
    console.log(chalk.bold(chalk.green(`Server is running at http://${hostname}:${port}/`)));

})