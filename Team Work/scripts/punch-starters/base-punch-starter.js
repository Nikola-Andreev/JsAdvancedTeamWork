function validateNumber(number) {
    if (typeof number != 'number'){
        throw new TypeError('This property must be a number!')
    }
    return number
}

function validateString (str) {
    if (typeof str != 'string') {
        throw new TypeError ('This property must be string!')
    }

    return str
}

function validateArray(array) {
    if (!Array.isArray(array)){
        throw new TypeError('Genres must be array of strings!')
    }
    for (let str of array){
        if (typeof str != 'string'){
            throw new TypeError('Genres must be array of strings!')
        }
    }
    return array
}


class BasePunchStarter {
    constructor(id, name, manufacturer, description, genres, targetPrice){
        if (new.target === BasePunchStarter){
            throw new Error('Cannot instant this class directly!')
        }
        this._id = validateNumber(id)
        this._name = validateString(name)
        this._manufacturer = validateString(manufacturer)
        this._description = validateString(description)
        this._genres = validateArray(genres)
        this._tagetPrice = validateNumber(targetPrice)
        this._accumulatedMoney = 0
    }

    get id() {
        return this._id
    }

    get name (){
        return this._name
    }

    get manufacturer (){
        return this._manufacturer
    }

    get description () {
        return this._description
    }

    get genres () {
        return this._genres
    }

    get targetPrice (){
        return this._tagetPrice
    }

    get accumulatedMoney () {
        return this._accumulatedMoney
    }

    set accumulatedMoney (money) {
        if (typeof money != 'number'){
            throw new TypeError
        }
        this._accumulatedMoney += money
    }
}

module.exports = BasePunchStarter;
