class CreateModel {

    constructor(){
        this._category = 'Movie'
    }

    get category(){
        return this._category
    }

    set category(cat){
        this._category = cat
        this.value = cat
    }
}

module.exports = CreateModel;