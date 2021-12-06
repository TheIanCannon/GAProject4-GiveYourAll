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
        charityName: r.charityName,
        charityRating: r.currentRating && r.currentRating.rating,
								charityCause: r.cause && r.cause.causeName,
								charityMission: r.mission,
								charityURL: r.websiteURL,
								charityEIN: r.ein,
    }))
    res.json(results);
}

async function charityGet(req, res){
		const charity = await Charity.findOne({ein: req.params.ein});
		if (!charity) {
		// no charity in db? create one w model
		const url = `https://api.data.charitynavigator.org/v2/Organizations/?app_key=${appKey}&app_id=${appId}&search=${req.query.ein}&format=json`;
		const result = await fetch(url).then((res)=>res.json());
		charity = await Charity.create({
				charityName: result.charityName,
				charityRating: result.charityRating,
				charityCause: result.charityCause,
				charityMission: result.charityMission,
				charityURL: result.charityURL,
				charityEIN: result.charityEIN
				},{
				timestamps: true
				});
		}
		res.json(charity);
		console.log(charity);
}
