const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

// 기본 응답
app.get('/', (req, res) => {
  res.status(200).send('Hello from cloud-native-devops-gcp');
});

// health: "살아있냐?" (liveness)
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok v1' });
});

// ready: "트래픽 받아도 되냐?" (readiness)
app.get('/ready', (req, res) => {
  res.status(200).json({ status: 'ready' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
  console.log("deploy test v2");
});

