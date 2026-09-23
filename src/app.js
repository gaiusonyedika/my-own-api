import express from 'express';
const app = express();
app.use(express.json());

app.get('/', function(req, res) {
  res.json({ message: 'Hello from my own API' });
});

app.get('/health', function(req, res) {
  res.json({
    status: 'ok',
    branch: 'staging',
    timestamp: new Date().toISOString()
});
});
export default app;
