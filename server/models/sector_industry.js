var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var SectorIndustrySchema = new Schema({
	sector: String,
	//get one sector
	industries: [String]
	//get all industries for sector
});
var SectorIndustry = mongoose.model('SectorIndustry', SectorIndustrySchema);
module.exports = SectorIndustry;