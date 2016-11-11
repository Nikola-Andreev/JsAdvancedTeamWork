let nextId = 0;
let InnovativePunchStarter = require('../punch-starters/innovative-punch-starter.js')
let MoviePunchStarter = require('../punch-starters/movie-punch-starter.js')
let GamePunchStarter = require('../punch-starters/game-punch-starter.js')
let FoodPunchStarter = require('../punch-starters/food-punch-starter.js')
let CraftsPunchStarter = require('../punch-starters/crafts-punch-starter.js')

class CreateModel {

    constructor(startId = 1){
        nextId = startId;
        this._category = 'Movie'
    }

    render(categories) {
        let html = '';
        html = '<div class="create-title">Create a PunchStarter</div>' +
            '<div class="punch-starter-category">' +
            '<select id="category">';
        for (let category in categories) {
            html += `<option value=${category}>${category}</option>`
        }
        html += '</select>' + '</div>';

        // Changing main content for debugging

        let mainParameters = '<div class="main-parameters">' +
            '<label>Name:</label>' +
            '<div class="input-holder">' +
            '<input class="input-name" type="text" placeholder="Name..." maxlength="20"></div>' +
            '<label>Manufacturer:</label>' +
            '<div class="input-holder">' +
            '<input class="input-manufacturer" type="text" placeholder="Manufacturer..." maxlength="20"></div>' +
            '<label>Description:</label>' +
            '<div class="input-holder">' +
            '<textarea class="input-description" placeholder="Description..." rows="2"></textarea>' +
            '</div></div>';

        let secondaryParameters = '<div class="secondary-parameters">' +
            '<label>Genres:</label>' +
            '<div class="list-holder">' +
            '<select class="input-genres"></select>' +
            '</div>' +
            '<div class="input-holder">' +
            '<input class="new-genre" type="text" placeholder="Add genre..."></div>' +
            '<div class="button-holder">' +
            '<button class="add-genre-button" type="button">Add</button>' +
            '<button class="remove-genre-button" type="button">Remove</button></div> ' +
            '<label>Target Price:</label>' +
            '<div class="input-holder"><input class="input-target-price" type="number" placeholder="Target Price..."></div>' +
            '</div>';

        let createFormHolder =
            '<div class="create-form-holder">' +
            '<form>' + mainParameters +
             secondaryParameters +
            '<div class="individual-parameters"></div>' +
            '</form>' +
            '<div class="submit-button-holder">' +
            '<button type="button">Submit PunchStarter</button>' +
            '</div>'+
            '</div>';
        html += createFormHolder;

        $('.wrapper main').html(html);
        this.renderCreateMovieModel();
        this.attachEventsCreateMovieModel();
    }
    renderCreateMovieModel() {
        let html =
            '<label>Director:</label>' +
            '<div class="input-holder">' +
            '<input class="input-director" type="text" placeholder="Director..."></div>' +
            '<label>Actors:</label>' +
            '<div class="list-holder"><select class="input-actors"></select></div>' +
            '<div class="input-holder">' +
            '<input class="new-actor" type="text" placeholder="Add actor..."></div>' +
            '<div class="button-holder"><button class="add-actor-button" type="button">Add</button>' +
            '<button class="remove-actor-button" type="button">Delete</button></div>'

        $('.wrapper main form .individual-parameters').append(html)
    }

    attachEventsCreateMovieModel (){
        $('.wrapper main form .individual-parameters .add-actor-button').on('click', function(){
            if ($('.new-actor').val() != '') {
                $('.input-actors').append($('<option>').text($('.new-actor').val()))
                $('.new-actor').val('')
            }
        })

        $('.wrapper main form .individual-parameters .remove-actor-button').on('click', function(){
            $('.input-actors :selected').remove()
        })
    }

    attachEvents(){
        let that = this
        $('.punch-starter-category').on('change', function () {
            let value =  $('#category').val()
            that._category = value
            if(that.category === 'Game'){
                $('.individual-parameters').empty()
                that.renderCreateGameModel()
                that.attachEventsCreateGameModel()
            } else if(that.category === 'Movie'){
                $('.individual-parameters').empty()
                that.renderCreateMovieModel()
                that.attachEventsCreateMovieModel()
            } else if(that.category === 'Innovative'){
                $('.individual-parameters').empty()
                that.renderCreateInnovativeModel()
                //that.attachEventsCreateInovativeModel()
            } else if(that.category === 'Food'){
                $('.individual-parameters').empty()
                that.renderCreateFoodModel()
                that.attachEventsCreateFoodModel()
            } else if(that.category === 'Crafts'){
                $('.individual-parameters').empty()
                that.renderCreateCraftsModel()
                that.attachEventsCreateCraftsModel()
            }
        })

        $('.wrapper main form .add-genre-button').on('click', function(){
            if ($('.new-genre').val() != '') {
                $('.input-genres').append($('<option>').text($('.new-genre').val()))
                $('.new-genre').val('')
            }
        })

        $('.wrapper main form .remove-genre-button').on('click', function(){
            $('.input-genres :selected').remove()
        })

        $('.submit-button-holder button').on('click',function () {
            let name = $('.input-name').val()
            let manufacturer = $('.input-manufacturer').val()
            let description = $('.input-description').val()
            let genres = []
            $('.input-genres option').each(function() {
                genres.push($(this).val())
            })
            let price = Number($('.input-target-price').val())
            let punchStarterType =  $('#category').val()
            let isValid = false
            if (name!='' && manufacturer != '' && description != '' && price >=0){
                isValid = true
            }
            if(punchStarterType === 'Innovative' && isValid){
                    let obj = new InnovativePunchStarter (nextId++, name, manufacturer, description, genres, price)
                    $('.wrapper main').trigger('createPunchStarter', [obj])
            }

            if(punchStarterType === 'Movie' && isValid){
                let director = $('.input-director').val()
                let actors = []
                $('.input-actors option').each(function() {
                    actors.push($(this).val())
                })

                let obj = new MoviePunchStarter (nextId++, name, manufacturer, description, genres, price, director, actors)
                $('.wrapper main').trigger('createPunchStarter', [obj])
                console.log(obj)
            }

            if(punchStarterType === 'Game' && isValid){
                let techs = []
                $('.input-technologies option').each(function() {
                    techs.push($(this).val())
                })

                let obj = new MoviePunchStarter (nextId++, name, manufacturer, description, genres, price, techs)
                $('.wrapper main').trigger('createPunchStarter', [obj])
            }

            if(punchStarterType === 'Food' && isValid){
                let recipe = $('.input-recipe').val()
                let ings = []
                $('.input-ingredients option').each(function() {
                    ings.push($(this).val())
                })

                let obj = new FoodPunchStarter (nextId++, name, manufacturer, description, genres, price, ings, recipe)
                $('.wrapper main').trigger('createPunchStarter', [obj])
            }

            if(punchStarterType === 'Crafts' && isValid){
                let res = []
                $('.input-resources option').each(function() {
                    res.push($(this).val())
                })

                let obj = new FoodPunchStarter (nextId++, name, manufacturer, description, genres, price, res)
                $('.wrapper main').trigger('createPunchStarter', [obj])
            }
        })

    }

    renderCreateGameModel(){
        let html =
            '<label>Technologies:</label>' +
            '<div class="list-holder">' +
            '<select class="input-technologies"></select>' +
            '</div>' +
            '<div class="input-holder">' +
            '<input class="new-technology" type="text" placeholder="Add technology..."></div>' +
            '<div class="button-holder">' +
            '<button class="add-technology-button" type="button">Add</button>' +
            '<button class="remove-technology-button" type="button">Remove</button></div> '

        $('.individual-parameters').append(html)

    }

    attachEventsCreateGameModel(){
        $('.add-technology-button').on('click',function () {
            let value = $('.new-technology').val()
            let option = $('<option></option>').text(value)
            $('.input-technologies').append(option)
            $('.new-technology').val('')
        })

        $('.remove-technology-button').on('click',function () {
            let value = $('.input-technologies').val()
            $(`.input-technologies :selected`).remove()
        })
    }

    renderCreateCraftsModel () {
        let html = '<label>Crafts:</label>' +
            '<div class="list-holder"><select class="input-resources"></select></div>' +
            '<div class="input-holder">' +
            '<input class="new-resource" type="text" placeholder="Add resource..."></div>' +
            '<div class="button-holder"><button class="add-resource-button" type="button">Add</button>' +
            '<button class="remove-resource-button" type="button">Delete</button></div>'
        $('.wrapper main form .individual-parameters').append(html)
    }

    attachEventsCreateCraftsModel(){
        $('.wrapper main form .individual-parameters .add-resource-button').on('click', function(){
            if ($('.new-resource').val() != '') {
                $('.input-resources').append($('<option>').text($('.new-resource').val()))
                $('.new-resource').val('')
            }
        })

        $('.wrapper main form .individual-parameters .remove-resource-button').on('click', function(){
            $('.input-resources :selected').remove()
        })
    }

    renderCreateInnovativeModel(){}

    renderCreateFoodModel() {
        let individualParams = '<label>Ingredients:</label>' +
            '<div class="list-holder">' +
            '<select class="input-ingredients"></select></div>' +
            '<div class="input-holder"><input class="new-ingredient" type="text" placeholder="Add ingredient..." maxlength="20"></div> ' +
            '<div class="button-holder">' +
            '<button class="add-ingredient-button" type="button">Add</button>' +
            '<button class="remove-ingredient-button" type="button">Remove</button></div>' +
            '<div class="input-holder"><textarea class="input-recipe" placeholder="Recipe..."></textarea></div> ';

        $('.individual-parameters').html(individualParams);
    }

    attachEventsCreateFoodModel() {
        $('.add-ingredient-button').click(function () {
            let newIngredient = $('.new-ingredient').val();
            if(newIngredient != ''){
                $('.input-ingredients').append(`<option>${newIngredient}</option>`);
            }
            $('.new-ingredient').val('');
        });
        $('.remove-ingredient-button').click(function () {
            let ingredients = $('.input-ingredients').children();
            $('.input-ingredients :selected').remove();
        });
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