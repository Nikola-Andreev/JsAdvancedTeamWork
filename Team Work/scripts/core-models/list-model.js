let PunchStarterModel = require('./punch-starter-model.js');
class ListModel {

    render (arr){
        arr.sort((a,b) => {
            return a.id - b.id
        })
        let html = $('<div>').addClass('punch-starter-list-holder')
        let table = $('<table>').addClass('punch-starter-table')
        html.append(table)
        let tableHeader = ['ID', 'Name', 'Manufacturer', 'Type', 'Progress']
        table.append($('<tr>'))
        for (let element of tableHeader){
            table.find('tr').append($('<th>').text(element))
        }
        for (let element of arr){
            let row = $('<tr>')
            for (let i = 0; i < tableHeader.length - 2;i++){
                row.append($('<td>').text(element[tableHeader[i].toLowerCase()]))
            }
            row.append($('<td>').text(element.constructor.name.replace('PunchStarter','')))
            row.append($('<td>').text(`${(element['_accumulatedMoney']/element['_tagetPrice'] * 100).toFixed(2)}%`))
            table.append(row)
        }

        $('.wrapper main').empty()
        $('.wrapper main').append($(html))
    }

    attachEvents(punchStarterDatabase) {
        $('.punch-starter-table tr').each(function () {
            $(this).click(function () {
                let currentId = $(this).children()[0].textContent;
                let currentObject = punchStarterDatabase[currentId - 1];
                $('.wrapper main').trigger('changePage', ["details", currentId]);
            })
        });
    }
}

module.exports = ListModel;