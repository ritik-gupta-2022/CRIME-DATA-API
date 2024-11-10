import express from "express";
import fs from 'fs';
import csvParser from "csv-parser";
const app = express();
const PORT = 8080;

app.get('/api/data', (req, res) => {
    const results = [];
    fs.createReadStream('crime_data.csv')
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results); 
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
