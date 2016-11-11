class CreateModel {

    constructor(){
        this._category = 'Movie'
    }

    render(categories) {
        let html = '';
        html = '<div class="create-title">Create a PunchStarter</div>' +
            '<div class="punch-starter-category">' +
            '<select >';
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
            '<input class="input-name" type="text" placeholder="Manufacturer..." maxlength="20"></div>' +
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
            '<input class="input-genre" type="text" placeholder="Add genre..."></div>' +
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

    get category(){
        return this._category
    }

    set category(cat){
        this._category = cat
        this.value = cat
    }
}

module.exports = CreateModel;