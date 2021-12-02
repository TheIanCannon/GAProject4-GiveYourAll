const fetch = require('node-fetch');
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;


module.exports = {
    search
};

async function search(req, res) {
    const url = `https://api.data.charitynavigator.org/v2/Organizations/?app_key=${appKey}&app_id=${appId}&search=${req.query.search}&format=json`;
    let results = await fetch(url).then(res => res.json());
    results = results.map(r => ({
        charityName: r.charityName,
        charityRating: r.currentRating && r.currentRating.rating,
    }))
    res.json(results);
}