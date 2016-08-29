var Sector = require('./server/models/sector_industry');

// Get all sectors
function getAll(request, response) {
  Sector.find(function(error, sectors) {
    if(error) response.json({message: 'Could not find any sectors'});
    response.json({sectors: sectors});
  });
}

// Get one sector
function getSector(request, response) {
  var id = request.params.id;

  Sector.findById({_id: id}, function(error, sector) {
    if(error) response.json({message: 'Could not find sector b/c:' + error});

    response.json({sector: sector});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  getSector: getSector
};