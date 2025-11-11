import express from "express"
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend is runninggggg!');
});

app.listen(PORT, () => {
  console.log(`Serverrrrrr running on port ${PORT}`);
});
