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

    renderProgress(punchStarter){
        let html =
            '<p>Progress</p>' +
            '<div class="donate-holder">' +
            '<div class="progress-bar-outer">' +
            `<div class="progress-bar-inner">${Math.round(Number(punchStarter.accumulatedMoney) / Number(punchStarter.targetPrice))}</div>` +
            '</div>' +
            '</div>' +
            '<input type="number">' +
            '<button>Donate</button>'
        $('.punch-starter-progress').html(html)
        $('.progress-bar-inner').css('width', (progress < 100 ? (progress *0.7) + 'vw' : '70vw'))
    }
}

module.exports = PunchStarterModel;