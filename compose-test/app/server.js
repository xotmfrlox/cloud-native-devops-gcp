const express = require('express');
const { Client } = require('pg');

const app = express();

const client = new Client({
  host: 'postgres',
  user: 'postgres',
  password: '1234',
  database: 'appdb',
});

let dbReady = false;

const connectDB = async () => {
  while (true) {
    try {
      const newClient = new Client({
        host: 'postgres',
        user: 'postgres',
        password: '1234',
        database: 'appdb',
      });

      await newClient.connect();
      console.log("DB connected");

      global.client = newClient;
      dbReady = true;
      break;

    } catch (err) {
      console.log("DB not ready, retrying...");
      await new Promise(res => setTimeout(res, 2000));
    }
  }
};

connectDB();

app.get('/', async (req, res) => {
  if (!dbReady) {
    return res.send("DB not ready yet");
  }

  const result = await global.client.query('SELECT NOW()');
  res.send(`HELLO DEVOPS V2 - DB Time: ${result.rows[0].now}`);
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
