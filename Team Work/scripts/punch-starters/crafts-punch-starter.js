let BasePunchStarter = require('./base-punch-starter.js');

class CraftsPunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, resources) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._resources = validateResources(resources);
    }
    get resources() {
        return this._resources;
    }
}

function validateResources(resources) {
    if (resources.constructor.name === 'Array') {
        for (let item of resources) {
            if (typeof item != 'string') {
                throw new TypeError('Invalid resources format!');
            }
        }
        return resources;
    }
    throw new TypeError("Invalid ingredients format!");
}

module.exports = CraftsPunchStarter;