import express,{ Request, Response, Express } from "express";

const app:Express = express();
const PORT=process.env.PORT||5000;

app.use(express.json());
app.get("/", (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
