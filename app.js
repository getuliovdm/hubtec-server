import http from 'http';
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';
import cors from 'cors';
const hostname = '192.168.2.37';
const port = 3333;
const app = express() // setup express application
const server = http.createServer(app);

app.use(logger('dev')); // log requests to the console
app.use(cors());
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('*', (req, res) => res.status(200).send({
    message: 'Page Not Found',
}));

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });