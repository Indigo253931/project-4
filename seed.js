// This file allows the seeding of application with data
// Run `node seed.js` from the root of this project folder.

var db = require('./server/models');

// Seed Data
var all_products= [
{
		sector: 'Construction',
		industry: 'Building Materials & Equipment',
		company_name: 'American limetechnology',
		product_name: 'Breathe Natual Fibre Insulation',
		comments: ['Insulation product made from premium grade hemp and flax fibrewhich create a naturally efficient thermal and acoustic insulation product for walls, floors and roofs.'],
		image: 'http://americanlimetechnology.com/wp-content/uploads/2012/01/Breathe-logo-100x240.png'
	
	},
{
		sector: 'Misc',
		industry: ['Food & Beverage'],
		company_name: 'Dr. Bronners',
		product_name: 'Whole Kernel Virgin Coconut Oil',
		comments: ['Certified Fair Trade by IMO', 'Certified Kosher by OK Kosher', 
		'Non-GMO verified by the NON-GMO Project', 'Certified Organic by the Oregon Tilth and USDA National Organic Program', 
		'Ceritfied vegan by Vegan Action'],
		image: 'https://www.drbronner.com/mm5/graphics/00000002/organic-coconutoil-whole-14oz_2.jpg'
}
];


var all_sectors = [
{
	sector: 'Agribusiness',
	industries: ['Crop Production & Basic Processing', 'Tobacco', 'Dairy', 
	'Poultry & Eggs', 'Livestock', 'Agricultural Services & Products', 
	'Food Processing & Sales', 'Forestry & Forest Products']
}, 
{
	sector: 'Communications/Electronics',
	industries: ['Printing & Publishing', 'TV/Movies/Music', 
	'Telephone Utilities', 'Telecom Services & Equipment', 
	'Electronics Manufacturing & Equipment', 'Internet']
}, 
{
	sector: 'Construction',
	industries: ['General Contractors', 'Home Builders', 
	'Special Trade Contractors','Construction Services', 
	'Architectural Services', 'Building Materials & Equipment']
}, 
{
	sector: 'Energy & Natural Resources',
	industries: ['Oil & Gas', 'Mining', 'Alternative Energy Production & Services',
	'Electric Utilities', 'Waste Management']
}, 
{
	sector: 'Misc Buisness',
	industries: ['Buisness Associations', 'Food & Beverage', 'Beer, Wine & Liquor',
	'Retail Sales', 'Miscellaneous Services', 'Buisness Services', 'Recreation / Live Entertainment',
	'Casinos / Gambling', 'Lodging / Tourism', 'Chemical & Related Manufacturing', 'Steel Production', 
	'Misc Manufacturing & Distributing', 'Textiles']
}, 
{
	sector: 'Transportation',
	industries: ['Air Transport', 'Automotive', 'Trucking',
	'Railroads', 'Sea Transport']
}
];


 db.Product.remove({}, function(err, products){

   db.Product.create(all_products, function(err, products){
     if (err) { return console.log('ERROR', err); }
     console.log("all products:", all_products);

   });
});

 db.SectorIndustry.remove({}, function(err, sectors){
 // console.log(all_sectors);
   db.SectorIndustry.create(all_sectors, function(err, sectors){

     if (err) { return console.log('ERROR', err); }
     console.log("all sectors:", sectors);
   });
});

  