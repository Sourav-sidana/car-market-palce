import express, { Request, Response } from "express";

const app = express();
const PORT: number | string = process.env.PORT || 5000;

// Middleware to parse JSON requests (optional but common)
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
