let BasePunchStarter = require('./base-punch-starter.js')

class InnovativePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice){
        super(id, name, manufacturer, description, genres, targetPrice)
    }
}

module.exports = InnovativePunchStarter;