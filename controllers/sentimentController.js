const vader = require('vader-sentiment');

exports.analyzeText = (req, res) => {
    const { text } = req.body;
    const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(text);
    res.json(intensity);
};
