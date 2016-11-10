let BasePunchStarter = require('./base-punch-starter.js')

function checkType(param) {
    if(Object.prototype.toString.call( param ) !== '[object Array]' ){
        throw new TypeError('The technologiesUsed is invalid')
    } else {
        return param
    }
}

class GamePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, technologiesUsed){
        super(id, name, manufacturer, description, genres, targetPrice)
        this._technologiesUsed = checkType(technologiesUsed)
    }

    get technologiesUsed(){
        return this._technologiesUsed
    }
}

module.exports = GamePunchStarter;