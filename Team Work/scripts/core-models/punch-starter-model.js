class PunchStarterModel {
	render(punchStarter){
        let html =
      '<div class="punch-starter-wrapper">' +
          '<div class="punch-starter-caption">' +
            `<label>${punchStarter.name}</label>` +
            `<label>${punchStarter.constructor.name.replace('PunchStarter', '')}</label>` +
          '</div>' +
          '<div class="punch-starter-resume"></div>' +
            `<label>Manufacturer</label>` +
            `<p>${punchStarter.manufacturer}</p>` +
            `<label>Description</label>` +
            `<p>${punchStarter.description}</p>` +
          '<div class="punch-starter-lists"></div>' +
          '<div class="punch-starter-progress"></div>' +
      '</div>'

        $('.wrapper main').html(html)
    }

    renderProgress(punchStarter){
        let html =
            '<p>Progress</p>' +
            '<div class="donate-holder">' +
            '   <div class="progress-bar-outer">' +
            `       <div class="progress-bar-inner">${Math.round(Number(punchStarter.accumulatedMoney) / Number(punchStarter.targetPrice))}</div>` +
            '       </div>' +
            '   </div>' +
            '<input type="number">' +
            '<button>Donate</button>'
        $('.punch-starter-progress').append($(html))
        $('.progress-bar-inner').css('width', (progress < 100 ? (progress *0.7) + 'vw' : '70vw'))
    }

    renderLists (punchStarter) {
        let html = $('<div>' +
            '<label>Genres</label>' +
            '<ul></ul>' +
            '</div>')
        for (let row of punchStarter.genres){
            html.find('ul').append($('<li>').text(row))
        }
        if (punchStarter.constructor.name == 'CraftsPunchStarter'){
            let inside = $('<div>' +
                '<label>Resources</label>' +
                '<ul></ul>'+
                '</div>')
            for (let element of punchStarter.resources){
                inside.find('ul').append($('<li>').text(element))
            }
            html.append(inside)
        }
        if (punchStarter.constructor.name == 'FoodPunchStarter'){
            let inside = $('<div>' +
                '<label>Ingredients</label>' +
                '<ul></ul>'+
                '</div>')
            for (let element of punchStarter.ingredients){
                $(inside).find('ul').append($('<li>').text(element))
            }
            let recipe = $('<div>' +
                '<label>Recipe</label>' +
                '</div>')
            recipe.append($('<p>').text(punchStarter.recipe))
            html.append(inside)
            html.append(recipe)
        }

        if (punchStarter.constructor.name == 'GamePunchStarter'){
            let inside = $('<div>'+
                '<label>Technologies Used</label>'+
                '<ul></ul>' +
                '</div>')
            for (let row of punchStarter.technologiesUsed){
                $(inside).find('ul').append($('<li>').text(row))
            }
            html.append(inside)
        }


        if (punchStarter.constructor.name == 'MoviePunchStarter'){
            let inside = $('<div>' +
                '<label>Actors</label>' +
                '<ul></ul>'+
                '</div>')
            for (let element of punchStarter.actors){
                inside.find('ul').append($('<li>').text(element))
            }
            let director = $('<div>' +
                '<label>Director</label>' +
                '</div>')
            director.append($('<p>').text(punchStarter.director))
            html.append(inside)
            html.append(director)
        }
        $('.punch-starter-lists').append($(html));
    }
}

module.exports = PunchStarterModel;