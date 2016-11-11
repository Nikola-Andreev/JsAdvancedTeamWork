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

        let createFormHolder =
            '<div class="create-form-holder">' +
            '<form>' +
            '<div class="main-parameters">' +
            '<label>Name:</label>' +
            '<div class="input-holder">' +
            '<input class="input-name" type="text" placeholder="Name..." maxlength="20"></div>' +
            '<label>Manufacturer:</label>' +
            '<div class="input-holder">' +
            '<input class="input-name" type="text" placeholder="Manufacturer..." maxlength="20"></div>' +
            '<label>Description:</label>' +
            '<div class="input-holder">' +
            '<textarea class="input-description" placeholder="Description..." rows="2"></textarea>' +
            '</div>' +
            '<div class="secondary-parameters"></div>' +
            '<div class="individual-parameters"></div>' +
            '</form>' +
            '<div class="submit-button-holder">' +
            '<button type="button">Submit PunchStarter</button>' +
            '</div>'+
            '</div>';
        html += createFormHolder;
        $('.wrapper main').html(html);
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