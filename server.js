const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const articles = require('./articles'); // Import articles
const analyzeSentiment = require('./public/js/emotion'); // Import analyzeSentiment function

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/articles', (req, res) => {
    res.json(articles);
});

app.get('/api/articles/:id', (req, res) => {
    const article = articles.find(article => article.id === req.params.id);
    if (!article) {
        return res.status(404).json({ message: 'Article not found' });
    }
    res.json(article);
});

app.post('/api/sentiment', (req, res) => {
    const result = analyzeSentiment(req.body.text);
    res.json(result);
});

// Add this endpoint to handle contact form submissions
app.post('/contact', (req, res) => {
    const message = req.body;
    const messagesFile = path.join(__dirname, 'mssages.json');

    // Read existing messages (if any)
    fs.readFile(messagesFile, 'utf8', (err, data) => {
        let messages = [];
        if (!err && data) {
            try {
                messages = JSON.parse(data);
            } catch (e) {
                messages = [];
            }
        }
        // Add the new message
        messages.push({
            ...message,
            date: new Date().toISOString()
        });

        // Write back to the file
        fs.writeFile(messagesFile, JSON.stringify(messages, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to save message' });
            }
            res.json({ message: 'Message saved successfully' });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});