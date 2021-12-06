const fetch = require('node-fetch');
const appId = process.env.APP_ID;
const appKey = process.env.APP_KEY;
const Charity = require('../../models/charity');

module.exports = {
    charitySearch, 
				charityGet,
};

async function charitySearch(req, res) {
    const url = `https://api.data.charitynavigator.org/v2/Organizations/?app_key=${appKey}&app_id=${appId}&search=${req.query.search}&format=json`;
    let results = await fetch(url).then(res => res.json());
    results = results.map(r => ({
        name: r.charityName,
        rating: r.currentRating && r.currentRating.rating,
								cause: r.cause && r.cause.causeName,
								mission: r.mission,
								URL: r.websiteURL,
								EIN: r.ein,
    }))
    res.json(results);
}

async function charityGet(req, res){
		let charity = await Charity.findOne({EIN:req.params.ein});
		if (!charity) {
				// no charity in db? create one w model
				const url = `https://api.data.charitynavigator.org/v2/Organizations/${req.params.ein}/?app_key=${appKey}&app_id=${appId}&format=json`;
				const result = await fetch(url).then((res)=>res.json());
				console.log(result);
				charity = await Charity.create({
						name: result.charityName,
						rating: result.currentRating && result.currentRating.rating,
						cause: result.cause && result.cause.causeName,
						mission: result.mission,
						URL: result.websiteURL,
						EIN: result.ein
						});
		}
		res.json(charity);
}
