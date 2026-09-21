import express from 'express';
const app = express();
app.use(express.json());
app.get('/', function(req, res) {
  res.json({ message: 'Hello from my own API' });
});
export default app;
