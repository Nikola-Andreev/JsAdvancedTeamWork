class PunchStarterModel {
	render(punchStarter){
	  let html =
      '<div class="punch-starter-wrapper">' +
          '<div class="punch-starter-caption">' +
            `<label>${punchStarter.name}</label>` +
            `<label>${punchStarter.constructor.name}</label>` +
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
}

module.exports = PunchStarterModel;