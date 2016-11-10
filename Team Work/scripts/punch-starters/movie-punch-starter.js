let BasePunchStarter = require('./base-punch-starter.js');

class MoviePunchStarter extends BasePunchStarter{
    constructor(id, name, manufacturer, description, genres, targetPrice, director, actors) {
        super(id, name, manufacturer, description, genres, targetPrice);
        this._director = validateDirector(director);
        this._actors = validateActors(actors);
    }
    get director() {
        return this._director;
    }
    get actors() {
        return this._actors;
    }
}

function validateDirector(director) {
    if (typeof director == 'string' && director != '') {
        return director;
    }
    throw new TypeError("Invalid director format!");
}

function validateActors(actors) {
    if (actors.constructor.name === 'Array') {
        for (let item of actors) {
            if (typeof item != 'string') {
                throw new TypeError('Invalid actors format!');
            }
        }
        return actors;
    }
    throw new TypeError("Invalid actors format!");
}

module.exports = MoviePunchStarter;