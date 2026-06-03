const Needs = require('./needs.models.js');
const NeedsState = require('./needsState.model');
const NeedsType = require('./needsType.model');
const Ubication = require('./ubication.model');
const Distric = require('./distric.model');
const Region = require('./region.model');

Needs.belongsTo(NeedsState,{
    foreignKey:'id_needs_state'
});

Needs.belongsTo(NeedsType,{
    foreignKey:'id_needs_type'
});

Needs.belongsTo(Ubication,{
    foreignKey:'id_ubication'
});

Ubication.belongsTo(Distric,{
    foreignKey:'id_distric'
});

Distric.belongsTo(Region,{
    foreignKey:'id_region'
});

module.exports = {
    Needs,
    NeedsState,
    NeedsType,
    Ubication,
    Distric,
    Region
};