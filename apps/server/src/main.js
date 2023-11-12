import express from 'express';
import * as path from 'path';
import router from './routes/index';
import bodyParser from 'body-parser';
import cors from 'cors';
import connection from './config/connection';

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static(path.join(__dirname, '../poker-roll')));
app.get('*/', (req, res) => {
  const indexFile = path.join(__dirname, '../poker-roll/index.html');
  res.sendFile(indexFile);
});
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
