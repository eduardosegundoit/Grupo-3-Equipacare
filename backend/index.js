import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();


const PORT = 8081;

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_, res) => {
    res.send('server esta de pe');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
